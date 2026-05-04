const express = require("express");
const app = express();

app.use(express.static("./public"));

// Rota principal - redireciona para index.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Para ambiente Vercel - exportar como handler serverless
module.exports = app;

// Para execução local
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  const HOST = process.env.HOST || '0.0.0.0';
  app.listen(PORT, HOST, () => {
    console.log(`Servidor rodando em http://${HOST}:${PORT}`);
  });
}