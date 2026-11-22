
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("."));
app.get("/", (req, res) => {
  res.send("IA ASISTENTE funcionando 💙");
});

app.post("/api/message", (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({
      error: "Mensaje inválido"
    });
  }

  res.json({
    success: true,
    reply: "¡Hola! Soy IA ASISTENTE. Mi cerebro se está preparando."
  });
});

app.listen(PORT, () => {
  console.log(`Servidor activo en puerto ${PORT}`);
});
