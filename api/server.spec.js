const request = require("supertest");
const server = require("./server.js");
const db = require("../data/dbConfig");

afterAll(async () => {
  await db("users").truncate();
});

describe("server.js", () => {
  describe("GET / endpoint", () => {
    it("should respond with status code 200 OK", async () => {
      let response = await request(server).get("/users");
      console.log(response.status);
      expect(response.status).toEqual(200);
    });
    it("should respond with JSON", async () => {
      let response = await request(server).get("/users");
      expect(response.type).toMatch(/json/i);
    });
    it("should send correct object with api key", async () => {
      const expected = [];
      let response = await request(server).get("/users");
      expect(response.body).toEqual(expected);
    });
  });

  describe("Post / endpoint", () => {
    it("should add user and provide correct response", async () => {
      const body = { username: "user1" };
      let response = await request(server)
        .post("/users")
        .send(body);
      expect(response.body).toEqual({ id: 1, username: "user1" });
      expect(response.status).toEqual(201);
    });
    it("should add user and provide correct response", async () => {
      const body = { username: "user2" };
      let response = await request(server)
        .post("/users")
        .send(body);
      expect(response.body).toEqual({ id: 2, username: "user2" });
      expect(response.status).toEqual(201);
    });
  });

  describe("Delete / endpoint", () => {
    it("should delete user and provide correct response", async () => {
      const id = 1;
      response = await request(server).delete(`/users/${id}`);
      expect(response.body).toEqual({});
      expect(response.status).toEqual(204);
    });
  });

  describe("Delete / endpoint", () => {
    it("should delete user and provide correct response", async () => {
      const id = 2;
      response = await request(server).delete(`/users/${id}`);
      expect(response.body).toEqual({});
      expect(response.status).toEqual(204);
    });
  });
});
