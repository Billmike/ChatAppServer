"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = require("./config");
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
config_1.config().then(connection => {
    console.log('we are connected');
}).catch(error => {
    console.log('an error occurred', error);
});
const app = express_1.default();
const port = 6000;
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use('/api/v1', routes_1.default);
app.get('/', (request, response) => {
    response.send('The hyena ate the Antelope');
});
app.listen(port, error => {
    if (error) {
        return console.error(error);
    }
    return console.log(`Server is listening on ${port}!`);
});
//# sourceMappingURL=app.js.map