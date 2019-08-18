"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_1 = require("typeorm");
const entity_1 = require("./entity");
dotenv_1.default.config();
typeorm_1.createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [
        entity_1.User,
        entity_1.Chat,
        entity_1.Message
    ],
    synchronize: true
}).then(connection => {
    console.log('our connection was created');
}).catch(error => console.log('an error occurred', error));
const app = express_1.default();
const port = 6000;
app.get('/', (request, response) => {
    response.send('The hyena ate the Antelope');
});
app.listen(port, error => {
    if (error) {
        return console.error(error);
    }
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map