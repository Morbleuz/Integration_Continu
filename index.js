// index.js
const express = require("express");
const { getArticles } = require("./articles");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/articles", (req, res) => {
    res.json(getArticles());
});

const startServer = () => {
    return app.listen(PORT, () => {
        console.log(`Serveur démarré sur http://localhost:${PORT}`);
    });
};

if (require.main === module) {
    startServer(); 
}

module.exports = { app, startServer };
