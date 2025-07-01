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
