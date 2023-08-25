const express = require("express");
const app = new express();
const PORT = 4000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./Routes/auth")
const postRoute = require("./Routes/post")
const cors = require("cors");


dotenv.config();
mongoose.connect(process.env.DB_URL,{
    serverSelectionTimeoutMS: 20000,
}).then(console.log("Database connected ")).catch((err)=>{
    console.log(err)
})

app.use(express.json());
app.use(cors());


app.use('/auth',authRoute);
app.use('/posts',postRoute);

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT} !`)
})