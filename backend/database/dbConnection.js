import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MongoDBURI, {
      dbName: "HMS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Error occured while connecting to database:", err);
    });
};
