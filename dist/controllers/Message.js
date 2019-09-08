"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entity_1 = require("../entity");
const uuid_1 = __importDefault(require("uuid"));
const errorHandler_1 = require("../utils/errorHandler");
class MessageController {
    static sendMessage(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId, chatId, message } = request.body;
                const newMessage = yield entity_1.Message.create({
                    id: uuid_1.default(),
                    userId,
                    chatId,
                    message
                }).save();
                return response.status(201).json({
                    success: true,
                    newMessage
                });
            }
            catch (error) {
                errorHandler_1.handleErrorGraciously();
            }
        });
    }
    static fetchChatMessage(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { chatId } = request.params;
                const messages = yield entity_1.Message.findAndCount({
                    where: {
                        chatId
                    }
                });
                return response.status(200).json({
                    success: true,
                    messages
                });
            }
            catch (error) {
                errorHandler_1.handleErrorGraciously();
            }
        });
    }
    static fetchUserChats(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId } = request.params;
                const userChats = yield entity_1.Message.find({
                    where: {
                        userId
                    }
                });
                return response.status(200).json({
                    success: true,
                    userChats
                });
            }
            catch (error) {
                errorHandler_1.handleErrorGraciously();
            }
        });
    }
}
exports.MessageController = MessageController;
//# sourceMappingURL=Message.js.map