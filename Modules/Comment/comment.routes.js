import express from "express";
import { createComment, deleteComment, getComment, updateComment} from "./comment.controllers.js";


const commentRouter = express.Router();
commentRouter.get("/getComment" , getComment)
commentRouter.post("/createComment" , createComment)
commentRouter.put("/updateComment" , updateComment)
commentRouter.delete("/deleteComment" , deleteComment)


export default commentRouter;