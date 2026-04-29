describe("Planos", () => {

  it("deve cadastrar plano", async () => {
    const response = await request(app)
      .post("/planos")
      .send({
        nome: "Plano Mensal",
        preco: 100
      });

    expect(response.statusCode).toBe(201);
  });

});