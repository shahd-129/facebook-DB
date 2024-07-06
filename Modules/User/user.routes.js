import express from "express";
import { userLogin, userLogout, userSignUp } from "./user.controllers.js";



const userRouter = express.Router();


userRouter.post('/signUp', userSignUp);
userRouter.post("/login", userLogin);
userRouter.patch("/logout", userLogout);
export default userRouter