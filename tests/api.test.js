const request = require("supertest");
const { startServer } = require("../index"); 

let server;

describe("Test de l'API articles", () => {
    beforeAll(() => {
        server = startServer();  
    });

    afterAll(() => {
        server.close();  
    });

    it("Devrait retourner la liste des articles", async () => {
        const response = await request(server).get("/articles");  
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });
});
