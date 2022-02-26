const express = require("express");
const app = express();
const connection = require("./database/connection");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 2000;

const userController = require("./controllers/userController");
app.use("/", userController);

connection
  .authenticate()
  .then(() => {
    console.log("Conectado com o Database !");
  })
  .catch((e) => console.log(e));

app.listen(port, () => {
  console.log(`App escutando a porta ${port}`);
});
