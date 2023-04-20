const ToDo = require("../models/todo.model");

const getTodos = async (req, res) => {
  try {
    const todos = await ToDo.find();
    res.send(todos);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving todos.",
    });
  }
};

const createTodo = async (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({
      message: "Todo text can not be empty",
    });
  }

  const todo = new ToDo({
    text: req.body.text,
    done: req.body.done || false,
    priority: req.body.priority || 0,
  });

  try {
    const data = await todo.save();
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Todo.",
    });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todo = await ToDo.findByIdAndRemove(req.params.todoId);
    if (!todo) {
      return res.status(404).send({
        message: "Todo not found with id " + req.params.todoId,
      });
    }
    res.send({ message: "Todo deleted successfully!" });
  } catch (err) {
    if (err.kind === "ObjectId" || err.name === "NotFound") {
      return res.status(404).send({
        message: "Todo not found with id " + req.params.todoId,
      });
    }
    return res.status(500).send({
      message: "Could not delete todo with id " + req.params.todoId,
    });
  }
};

const updateTodo = async (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({
      message: "Todo text can not be empty",
    });
  }

  try {
    const todo = await ToDo.findByIdAndUpdate(
      req.params.todoId,
      {
        text: req.body.text,
        done: req.body.done,
      },
      { new: true }
    );
    if (!todo) {
      return res.status(404).send({
        message: "Todo not found with id " + req.params.todoId,
      });
    }
    res.send(todo);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: "Todo not found with id " + req.params.todoId,
      });
    }
    return res.status(500).send({
      message: "Error updating todo with id " + req.params.todoId,
    });
  }
};

module.exports = {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
};
