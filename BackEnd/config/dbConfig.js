import mongoose from "mongoose";

const Connection = async () => {
  await mongoose.connect("mongodb://localhost:27017/tomatoDb").then(console.log("Connected established to MongoDB"));
};

export default Connection;