const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  //   update,
  remove,
  getAll,
  findById
};

async function insert(user) {
  const [id] = await db("users").insert(user);
  return db("users")
    .where({ id })
    .first();
}

function remove(id) {
  return db("users")
    .where("id", id)
    .del();
}

function getAll() {
  return db("users");
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
