const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require("./middleware/errorMIddleware");
const ConfessionsRoute = require('./routes/ConfessionsRoutes');


dotenv.config();
connectDB();
const app = express();

app.use(express.json()); // to accept JSON data



app.get(`/`,(req,res)=>{
    res.send("API is running");
});

app.use('/api/user',userRoutes);
app.use('/api/confessions',ConfessionsRoute);

app.use(notFound);
app.use(errorHandler);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT http://localhost:${PORT}`);
});
