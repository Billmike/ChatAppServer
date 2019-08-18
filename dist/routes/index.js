"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = require("../controllers/User");
const router = express_1.default.Router();
router.post('/user/register', User_1.validate('registerUser'), User_1.UserController.registerUser);
exports.default = router;
//# sourceMappingURL=index.js.map