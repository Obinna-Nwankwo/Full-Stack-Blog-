import mongoose from "mongoose";


export const connectMongoDB = async () => {
  try {
    if (mongoose.connection.readyState !== 1) {  
      await mongoose.connect(process.env.MONGODB_URL as string);
      console.log("Connected to MongoDB successfully");
    }
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw error;  
  }
};



// import mongoose from 'mongoose';

// const MONGO_URI = process.env.MONGO_URI || '';

// if (!MONGO_URI) {
//   throw new Error('Please define the MONGO_URI environment variable inside .env.local');
// }

// const connectMongoDB = async () => {
//   if (mongoose.connection.readyState >= 1) return;

//   return mongoose.connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// };

// export default connectMongoDB;
