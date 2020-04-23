const request = require("supertest");

const server = require("./server.js");
const db = require("../data/dbConfig");

describe("server", () => {
    describe("GET /", () => {
        it("should return 200 ok", () => {
            // Make a GET request to the / endpoint
            return request(server) // return the async call to let jest know to wait
            .get("/").then(res => {
                // Assert that the HTTP status code is 200
                expect(res.status).toBe(200);
            })
        })
    })

    describe("POST /hobbits", () => {
        
        beforeEach(async () => {
            await db("hobbits").truncate(); // empty the table and reset the id back to 1
        })

        it("should return 201 success", () => {
            return request(server)
            .post("/hobbits").send({ name: "Shrimp" })
            .then(res => {
                expect(res.status).toBe(201);
            })
        })

        it("should return a message saying 'Hobbit created successfully'", () => {
            return request(server)
            .post("/hobbits").send({ name: "Rabbit" })
            .then(res => {
                expect(res.body.message).toBe("Added hobbit successfully");
            })
        });

        it("add hobbit to the db", async () => {
            const hobbitName = "Zebra";

            const existing = await db("hobbits").where({ name: hobbitName })
                expect(existing).toHaveLength(0);

            await request(server)
                .post("/hobbits").send({ name: "Zebra" })
                .then(res => {
                    expect(res.body.message).toBe("Added hobbit successfully");
                })

            await request(server)
                .post("/hobbits").send({ name: "Sam" })
                .then(res => {
                    expect(res.body.message).toBe("Added hobbit successfully");
                })

                const inserted = await db("hobbits"); // .where({ name: hobbitName })
                expect(inserted).toHaveLength(2);
        });
    })
})