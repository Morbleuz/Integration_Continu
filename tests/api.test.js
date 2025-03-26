const request = require("supertest");
const app = require("../index");

describe("Test de l'API articles", () => {
    it("Devrait retourner la liste des articles", async () => {
        const response = await request(app).get("/articles");
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });
});
