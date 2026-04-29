import request from "supertest";
import app from "../server.js";

describe("Login", () => {

  it("deve logar com sucesso", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({
        email: "teste@email.com",
        senha: "123456"
      });

    expect(response.statusCode).toBe(200);
  });

  it("deve falhar com senha incorreta", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({
        email: "teste@email.com",
        senha: "errada"
      });

    expect(response.statusCode).toBe(401);
  });

});