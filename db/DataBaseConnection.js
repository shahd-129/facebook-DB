import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("Facebook", "root", "", {
    host: "localhost",
    dialect: "mysql",
  });
  const connection = async () => {
    try {
      await sequelize.sync({alert: true , focus: true});
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }


  export default connection