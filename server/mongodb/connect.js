import mongoose from "mongoose";

const connectDB = (url) => {
<<<<<<< HEAD
  mongoose.set('strictQuery', true);

  mongoose.connect(url).then(() => console.log('MongoDB connected')).catch((err) => console.log(err));
}
export default connectDB;
=======
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};
export default connectDB;
>>>>>>> e1a29180cfb8e0b65b1a9547a1b41ba165aa0e1a
