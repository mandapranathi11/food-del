import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://mp11:mpsk0411@cluster0.64j4ekj.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
