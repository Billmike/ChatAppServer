"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
exports.config = () => {
    return typeorm_1.createConnection({
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
    });
};
//# sourceMappingURL=index.js.map