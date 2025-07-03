import bcrypt from "bcryptjs";
import { User } from "../models/user.js";
import { response } from "express";

export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (firstName == "" || lastName == "" || email == "" || password == "") {
      return res.status(400).send("please fill all the fields");
    }
    console.log(email);
    const alreadyExists = await User.findOne({ email });
    console.log(alreadyExists)

    if (alreadyExists) {
        return res
            .status(400)
            .json({ message: "User with this email already exists" });
    }
    console.log("data")

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    console.log(newUser);
    await newUser
      .save()
      .then(() => {
        return res.status(201).json({
          message: "User created successfully",
          user: req.body,
        });
      })
      .catch((error) => {
        console.log("Khushi le bigareko yo code" + error);
        return res.status(500).json({
            message: "Error",
            error: error
        });
      });

    const userResponse = newUser.toObject();
    delete userResponse.password;
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const getallUsers=async(req,res) =>{
  try{
    const users=await User.find();
    res.status(200).json({
      message:"User fetched sucessfully",
      users,
    });

  }
  catch(error){
    res.status(500).json({
      message:"Internal Server Error",
      error:error.message
    });

  }
}

export const getUserByid=async(req,res)=>{
  try{
    const userid=req.params.id;
    const user = await User.findById(userid);
    if(!user){
      return res.status(404).json({
        message:"user not found",
      })
    }
    res.status(200).json({
      message:"user fetched sucessfully",
      user,
    });
  } catch(error){
    res.status(500).json({
      message:"Internal server error",
    })
  }

}

export const updateUser =async(req,res)=>{
  try {
        const { id } = req.params;
        const updates = req.body;
        if(updates.password) {
            delete updates.password; 
        }

        const user = await User.findByIdAndUpdate(id, updates, {
            new: true,
            runValidators: true,
        });
        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }
        res.status(200).json({
            message: "User updated successfully",
            user,
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }

}

export const deleteUser =async(req,res)=>{
  try {
        const { id } = req.params;

        const user = await User.findByIdAndDelete(id, {
            new: true,
            runValidators: true,
        });
        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }
        res.status(200).json({
            message: "User deleted successfully",
            user,
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });

    }
}
