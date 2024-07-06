import { DataTypes } from "sequelize";
import { userModel } from "../User/user.js";
import { postModel } from "../Post/post.js";
import { sequelize } from "../../DataBaseConnection.js";


export const commentModel = sequelize.define("comment", {
    content: {
    type: DataTypes.STRING(200),
  },

});

userModel.hasMany(commentModel , {
  onDelete : "CASCADE",
  onUpdate : "CASCADE",
})
postModel.hasMany(commentModel , {
  onDelete : "CASCADE",
  onUpdate : "CASCADE",
})
commentModel.belongsTo(userModel),
commentModel.belongsTo(postModel)


