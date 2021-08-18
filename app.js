//external imoprts
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const cookieParser = require('cookie-parser');

//internal imoprts
const loginRouter = require("./Router/loginRouter");
const usersRouter = require("./Router/usersRouter");
const flatRouter = require("./Router/flatRouter");
const contactRouter = require("./Router/contactRouter");

const app = express();
dotenv.config();
app.use(cookieParser(process.env.COOKIE_SECRET));

//Database Connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection successful"))
  .catch((err) => console.log(err));

//request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//Routing setup
// app.use("/", (req, res) => {
//   res.send("This is server Side");
// });
app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/flat", flatRouter);
app.use("/contact", contactRouter);

//defaul error handler

const errorHandler = (err, req, res, next) => {
  if (err) {
    if (err instanceof multer.MulterError) {
      res.status(500).send("There was an upload error");
    } else {
      res.status(500).send(err.message);
    }
  } else {
    res.send("Successful");
  }
};

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at http://localhost:${process.env.PORT}`);
});
