const mongoose = require("mongoose");


const connectDB = async ()=>{
    try {
        
        const conn = await mongoose.connect(process.env.MONGO_URI, {
  serverApi: {
    version: "1",
    strict: true,
    deprecationErrors: true,
  }
});
        console.log(`MongoDB connected at :${conn.connection.host}`);
        
    } catch (error) {
        console.log(`Error${error.message}`);
        process.exit();
    }
}

module.exports = connectDB;