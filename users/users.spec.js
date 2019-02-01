const request = require("supertest");
const usersModel = require("./users.js");
const db = require("../data/dbConfig");
// before and aftereach or before and afterall // cleans table
afterAll(async () => {
    await db('users').truncate();
});
describe("User Model", () => {
  it("should insert provided user", async () => {
    const user = await usersModel.insert({ username: "bilbo" });
    const users = await db("users");
    expect(users).toHaveLength(1);
    expect(user.username).toEqual("bilbo");
  });
  it("should delete provided user", async () => {
    const users = await usersModel.remove(1);
    console.log(users);
    // expect(users).toHaveLength(0);
  });
});