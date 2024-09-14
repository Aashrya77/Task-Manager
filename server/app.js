require("dotenv").config();
const express = require("express");
const app = express();
const port = 5000; 
const products = require("./Routes/route"); 
const connectDb = require("./db/connect");
const cors = require("cors");

//middleware 
app.use(cors());
app.use(express.json()); 
app.use("/api/v1/tasks", products);  

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);     
    app.listen(port, () => console.log(`Server listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
  