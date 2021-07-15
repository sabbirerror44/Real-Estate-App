//external imoprts
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

//internal imoprts
const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const indexRouter = require("./router/indexRouter");
const flatRouter = require("./Router/flatRouter");

const app = express();
dotenv.config();

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

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//Routing setup
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/flat", flatRouter);

//defaul error handler
const errorHandler = (err, req, res, next) => {
  if (err) {
    res.status(500).send(err.message);
  } else {
    res.send("Not Successful");
  }
};
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at http://localhost:${process.env.PORT}`);
});
