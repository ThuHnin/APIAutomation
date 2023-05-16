import supertest from "supertest";
import { BASEURL_MSG } from "../data/key";
import { msgHeader } from "../data/header";
import { msgRequestBody } from "../data/body";


const request = supertest (BASEURL_MSG);
const MSGCREATEAPI = '/api/v1/messages/text?sync=true';


describe("Message Request", () => {


    it ('POST message without authentication', () => {
       return request.post(MSGCREATEAPI)
            .then ((res) => {
                expect(res.statusCode).toBe(401);
            });
    });

    test.concurrent ("POST message with Authorization", async() =>{
        const response = await request
        .post(MSGCREATEAPI)
        .set(msgHeader)
        .send(msgRequestBody);
        expect(response.statusCode).toBe(201);   
                
    },9000)
})