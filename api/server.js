const express = require("express");

const users = require("../users/users.js");

const server = express();

server.use(express.json());

const serverError = res => err => {
  res.status(500).json(err);
};
const getSuccess = res => data => {
  res.status(200).json(data);
};

const delSuccess = res => data => {
  res.status(200).json(data);
};

const postSuccess = res => id => {
  res.status(201).json(id);
};

server.get("/users", (req, res) => {
  users
    .getAll()
    .then(getSuccess(res))
    .catch(serverError(res));
});

server.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  users
    .findById(id)
    .then(getSuccess(res))
    .catch(serverError(res));
});

server.post("/users", (req, res) => {
  const body = req.body;
  if (!body) {
    res.status(500).json({ Error_Message: "Provide User Name" });
  } else {
    users
      .insert(body)
      .then(postSuccess(res))
      .catch(serverError(res));
  }
});

server.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  users
    .remove(id)
    .then(delSuccess(res))
    .catch(serverError(res));
});

module.exports = server;
