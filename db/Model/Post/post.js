
import { DataTypes } from "sequelize";
import  { sequelize } from "../../DataBaseConnection.js";
import { userModel } from "../User/user.js";


export const postModel = sequelize.define("post", {
  title: {
    type: DataTypes.STRING(200),
  },
 content: {
    type: DataTypes.STRING(200),
  },
 
});

userModel.hasMany(postModel , {
  onDelete : "CASCADE",
  onUpdate : "CASCADE",
})
postModel.belongsTo(userModel)

