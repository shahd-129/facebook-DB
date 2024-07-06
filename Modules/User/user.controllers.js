import { userModel } from "../../db/Model/User/user.js";
import bcrypt from "bcrypt";


export const userSignUp = async (req, res) => {
    const { username, email, password } = req.body;
    const getUser = await userModel.findOne({ where: { email } });
    if (getUser) {
        return res.json({ message: "User already exists" });
    }
   const hashPassword = bcrypt.hashSync(password, 10);
    const result = await userModel.create({ username, email, password: hashPassword });
    res.json({ message: "User created successfully", result });
}



export const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const passwordCorrect = bcrypt.compareSync(password, user.password);
        if (!passwordCorrect) {
            return res.status(401).json({ message: "Password incorrect" });
        }

        await user.update({ loginStatus: true });
        res.json({ message: "Login successful", user });
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ message: "Internal server error" });
    }
}


export const  userLogout = async (req, res) => {
    const {id} = req.query
    const logoutStatus = await userModel.update({ loginStatus:false } , { where: {id}});
    res.json({message : "Logout successful" , logoutStatus});
}   
