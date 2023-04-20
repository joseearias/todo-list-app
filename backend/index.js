const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const todoController = require("./src/controllers/todo.controller");

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost/todo-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/todos", todoController.getTodos);
app.post("/todos", todoController.createTodo);
app.delete("/todos/:todoId", todoController.deleteTodo);
app.put("/todos/:todoId", todoController.updateTodo);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
