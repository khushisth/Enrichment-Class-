import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email);
    if (!user) {
        res.status(400).json({message:"Invalid email"})
    }
    const check = bcrypt.compare(password, userpassword);
    if (!check) {
      res.status(404).json({ message: "Invalid Password" });
    }
    if (user && check) {
      res.status(200).json({ message: "login sucessful" });
    }
    const { password: pass, ...rest } = user._doc;

    const token = jwt.sign({ id: rest._id, role: rest.role }, 
    process.env.JWT);
  } catch (error) {
    console.log(error);
    return res.status(500).jason({message:"server error"});
  }
};
