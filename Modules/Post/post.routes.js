import express from "express";
import { createPost, deletePost, getPost, getSpecificPost, updatePost } from "./post.controllers.js";


 const postRouter = express.Router();

postRouter.get("/getPost" , getPost)
postRouter.post("/addPost" , createPost)
postRouter.put("/updatePost" , updatePost)
postRouter.delete("/deletePost" , deletePost)
postRouter.get("/getSpecificPost" , getSpecificPost)

export default postRouter