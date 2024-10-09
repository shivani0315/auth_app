const mongoose = require('mongoose');

// MongoDB Connection Function
const connectDB = async () => {
  try {
    // Connect to MongoDB using the connection string from the environment variables
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    // Exit the process with failure if the connection fails
    process.exit(1);
  }
};

module.exports = connectDB;
