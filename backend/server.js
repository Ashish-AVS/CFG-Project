require("dotenv").config();
const cors = require("cors");
const child = require('./routes/user');
const express = require("express");
const mongoose = require("mongoose");
const tesT = require('./routes/test');
const userRouter = require('./routes/postroute');


//express app
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routes
app.use("/child", child);
app.use('/api', userRouter);
app.use('/test',tesT)

const uri = process.env.MONGO_URI;
mongoose.connect(uri, {
  // @ts-ignore
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});
app
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("connected to MongoDB successfully!");
});
