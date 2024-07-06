import { DataTypes } from "sequelize";
import  { sequelize } from "../../DataBaseConnection.js";


export const userModel = sequelize.define("user", {
  
   
  
  username: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(200),
    unique: true,
  },
  password: {
    type: DataTypes.STRING(200),
  },
  loginStatus :{
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
});




