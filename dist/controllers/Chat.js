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
class ChatController {
    static createChatRoom(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { chatId, chatType } = request.body;
                const existingChat = yield entity_1.Chat.findOne({
                    where: {
                        chatId
                    }
                });
                if (existingChat) {
                    return response.status(409).json({
                        message: 'Chat already exists',
                        success: false
                    });
                }
                const newChatRoom = yield entity_1.Chat.create({
                    id: uuid_1.default(),
                    chatId,
                    chatType
                }).save();
                return response.status(201).json({
                    success: true,
                    newChatRoom
                });
            }
            catch (error) {
                errorHandler_1.handleErrorGraciously();
            }
        });
    }
}
exports.ChatController = ChatController;
//# sourceMappingURL=Chat.js.map