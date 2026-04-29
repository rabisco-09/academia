import request from "supertest";
import app from "../server.js";

describe("Usuário", () => {

  it("deve criar um usuário", async () => {
    const response = await request(app)
      .post("/usuarios")
      .send({
        nome: "Teste",
        email: "teste@email.com",
        senha: "123456"
      });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
  });

  it("deve retornar erro ao criar usuário sem nome", async () => {
    const response = await request(app)
      .post("/usuarios")
      .send({
        email: "teste@email.com",
        senha: "123456"
      });

    expect(response.statusCode).toBe(400);
  });

});