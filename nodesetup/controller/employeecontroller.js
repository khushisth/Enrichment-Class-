import { Employee } from "../models/employee.js"
export const createEmployee = async (req, res) => {
  try {
    console.log("I am here")
    const { firstName, lastName, employeeID, salary, department} = req.body;
    if (firstName == "" || lastName == "" || employeeID == "" || salary == "" || department == "") {
      return res.status(400).send("please fill all the fields");
    }
    // const alreadyExists = await Employee.findOne({ employeeID });

    // if (alreadyExists) {
    //     return res
    //         .status(400)
    //         .json({ message: "User with this ID already exists" });
    // }
    console.log("I am here")
    const newemployee = new Employee({
      firstName,
      lastName,
      employeeID,
      salary,
      department,
    });
    await newemployee
      .save()
      
      return res.status(201).json({
          message: "User created successfully",
          user: req.body,
        });
     

   
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const getallemployee=async(req,res) =>{
  try{
    const employee=await Employee.find();
    res.status(200).json({
      message:"User fetched sucessfully",
      employees:employee,
    });

  }
  catch(error){
    res.status(500).json({
      message:"Internal Server Error",
      error:error.message
    });

  }
}

export const getemployeeByid=async(req,res)=>{
  try{
    const employeeID=req.params.employeeid;
    const employee = await Employee.findById(employeeID);
    if(!employee){
      return res.status(404).json({
        message:"user not found",
      })
    }
    res.status(200).json({
      message:"user fetched sucessfully",
      employee:employee,
    });
  } catch(error){
    res.status(500).json({
      message:"Internal server error",
    })
  }

}

export const updateemployee =async(req,res)=>{
  try {
        const { employeeID } = req.params;
        const updates = req.body;
        if(updates.employeeID) {
            delete updates.employeeID; 
        }

        const employee = await Employee.findByIdAndUpdate(employeeID, updates, {
            new: true,
            runValidators: true,
        });
        if (!employee) {
            return res.status(404).json({
                message: "User not found",
            });
        }
        res.status(200).json({
            message: "User updated successfully",
            employee,
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }

}

export const deleteemployee =async(req,res)=>{
  try {
        const { id } = req.params;

        const employee = await Employee.findByIdAndDelete(employeeID, {
            new: true,
            runValidators: true,
        });
        if (!employee) {
            return res.status(404).json({
                message: "User not found",
            });
        }
        res.status(200).json({
            message: "User deleted successfully",
           employee,
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });

    }
}
