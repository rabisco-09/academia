import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usuarioRoute from "./src/routes/usuarioRoute.js";
import planoRoute from "./src/routes/planoRoute.js";
import alunoRoute from "./src/routes/alunoRoute.js";
import treinoRoute from "./src/routes/treinoRoute.js";
import authRoute from "./src/routes/authRoute.js";
import instrutorRoute from "./src/routes/instrutorRoute.js";
import frequenciaRoute from "./src/routes/frequenciaRoute.js";
import express from "express";

import { swaggerUi, swaggerSpec } from "./src/config/swagger.js";

dotenv.config();

const app = express();

app.use(express.json());





app.use((req, res, next) => {
  console.log(`➡️ ${req.method} ${req.url}`);
  next();
});


app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "ngrok-skip-browser-warning"
  ]
}));


app.get("/", (req, res) => {
  res.status(200).json({ msg: "Api funcionando" });
});

app.get("/teste", (req, res) => {
  res.status(200).json({ ok: true });
});

app.use("/usuarios", usuarioRoute);
app.use("/auth", authRoute);
app.use("/planos", planoRoute);
app.use("/alunos", alunoRoute);
app.use("/treinos", treinoRoute);
app.use("/instrutores", instrutorRoute);
app.use("/frequencias", frequenciaRoute);


app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("=================================");
  console.log(` Servidor rodando em http://localhost:${PORT}`);
  console.log(` Swagger: http://localhost:${PORT}/docs`);
  console.log("=================================");
});