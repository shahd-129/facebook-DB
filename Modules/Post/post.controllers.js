import { postModel } from "../../db/Model/Post/post.js"
import { userModel } from "../../db/Model/User/user.js"

export const getPost = async(req , res) =>{
    const getpost = await postModel.findAll()
    res.json(getpost)
}


export const createPost = async(req , res) =>{
    const {title , content , userId} = req.body
    console.log(userId);
    const userFind = await userModel.findOne({where : {id : userId ,loginStatus : true}})
    
    if(!userFind){
        return res.json({message : "user not login"})
    }
    
    const createpost = await postModel.create({title , id: userId ,  content})
    res.json({  message : "post created successfully",createpost})
}


export const updatePost = async (req, res) => {
    const { id } = req.query;
    const { title, userId } = req.body;
    const postUpdate = await postModel.update({ title }, { where: { id , userId } });
    if(postUpdate === 0){
      return res.json({ message: "You are not allowed to edit this post" });
    }
    res.json({ message: "post updated successfully", postUpdate });
  };


export const deletePost = async(req , res) =>{
    const { id } = req.query;
    const { userId } = req.body;
    const postDelete = await postModel.destroy( { where: { id , userId } });
    if(postDelete === 0){
      return res.json({ message: "You are not allowed to delete this post" });
    }
    res.json({ message: "post deleted successfully", postDelete });
}


export const getSpecificPost = async(req , res) =>{
    const postSpecific = await postModel.findAll({
        include:{
          model: userModel
        },
    })
    res.json(postSpecific)
}