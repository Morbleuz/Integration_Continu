const express = require("express");
const app = express();
const { getArticles } = require("./articles");

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/articles", (req, res) => {
    res.json(getArticles()).status(200);
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

module.exports = app;
