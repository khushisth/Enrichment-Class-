const LeaveRequest = require('../models/leaveRequest');

exports.getAllLeaves = async (req, res) => {
  const leaves = await LeaveRequest.find().populate('employeeId approvedBy');
  res.json(leaves);
};

exports.getMyLeaves = async (req, res) => {
  const myLeaves = await LeaveRequest.find({ employeeId: req.user.employeeId });
  res.json(myLeaves);
};

exports.submitLeave = async (req, res) => {
  try {
    const leave = new LeaveRequest({
      ...req.body,
      employeeId: req.user.employeeId,
    });
    await leave.save();
    res.status(201).json(leave);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.approveLeave = async (req, res) => {
  const { status } = req.body;
  if (!['approved', 'rejected'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status' });
  }
  const updated = await LeaveRequest.findByIdAndUpdate(
    req.params.id,
    { status, approvedBy: req.user.employeeId },
    { new: true }
  );
  res.json(updated);
};
