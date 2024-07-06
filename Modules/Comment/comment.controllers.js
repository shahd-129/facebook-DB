import { commentModel } from "../../db/Model/Comment/comment.js"
import { userModel } from "../../db/Model/User/user.js"




export const getComment = async(req , res) =>{
    const comment = await commentModel.findAll()
    res.json(comment)
 }
 
export const createComment = async(req , res) =>{
    const {content , userId , postId} = req.body
    const getcomment = await userModel.findOne({where : {id: userId , loginStatus : true}})
   
     if(!getcomment){
        return res.json({message : "user not login"})       
            }
          
              const createComment = await commentModel.create({content , userId , postId})
              res.json({  message : "comment created successfully" , createComment})
     }



export const updateComment = async (req, res) => {
    const { id } = req.query;
    const { content, userId } = req.body;
    const commentUpdate = await commentModel.update({ content }, { where: { id , userId } });
    if(commentUpdate === 0){
      return res.json({ message: "You are not allowed to edit this comment" });
    }
    res.json({ message: "Comment updated successfully", commentUpdate });
  };



export const deleteComment = async(req , res) =>{
    const { id } = req.query;
    const {userId } = req.body;
    const commentDelete = await commentModel.destroy( { where: { id , userId } });
    res.json({ message: "Comment deleted successfully", commentDelete})
} 