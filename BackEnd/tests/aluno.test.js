describe("Alunos", () => {

  it("deve listar alunos", async () => {
    const response = await request(app).get("/alunos");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

});