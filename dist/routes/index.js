"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = require("../controllers/User");
const controllers_1 = require("../controllers");
const router = express_1.default.Router();
/**
 * Endpoint to register new user
 */
router.post('/user/register', User_1.validate('registerUser'), User_1.UserController.registerUser);
/**
 * Endpoint to send new message
 */
router.post('/message', controllers_1.MessageController.sendMessage);
/**
 * Endpoint to fetch user's chats
 */
router.get('/chat/:userId', controllers_1.MessageController.fetchUserChats);
/**
 * Endpoint to fetch the messages in a single chat
 */
router.get('/message/:chatId', controllers_1.MessageController.fetchChatMessage);
/**
 * Endpoint to create the new chat session
 */
router.post('/chat', controllers_1.ChatController.createChatRoom);
/**
 * Endpoint to get all contacts
 */
router.get('/contacts', User_1.UserController.getRegisteredContacts);
exports.default = router;
//# sourceMappingURL=index.js.map