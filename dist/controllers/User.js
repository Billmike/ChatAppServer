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
const express_validator_1 = require("express-validator");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const uuid_1 = __importDefault(require("uuid"));
const errorHandler_1 = require("../utils/errorHandler");
class UserController {
    static registerUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, phoneNumber } = request.body;
                const existingUser = yield entity_1.User.findOne({
                    where: {
                        phoneNumber
                    }
                });
                if (existingUser) {
                    return response.status(409).json({
                        success: false,
                        message: 'A user with this phone number is registered'
                    });
                }
                const errors = express_validator_1.validationResult(request);
                if (!errors.isEmpty()) {
                    return response.status(422).json({
                        success: false,
                        errors: errors.array()
                    });
                }
                const user = yield entity_1.User.create({
                    id: uuid_1.default(),
                    username,
                    phoneNumber
                }).save();
                const token = jsonwebtoken_1.default.sign({
                    id: user.id
                }, process.env.PRIVATE_KEY);
                return response.status(201).json({
                    success: true,
                    user,
                    token
                });
            }
            catch (error) {
                errorHandler_1.handleErrorGraciously();
            }
        });
    }
    static getRegisteredContacts(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { phoneNumbers } = request.body;
                const existingContacts = yield entity_1.User.find({
                    where: phoneNumbers
                });
                return response.status(200).json({
                    success: true,
                    existingContacts
                });
            }
            catch (error) {
                console.log('caught error', error);
            }
        });
    }
}
exports.UserController = UserController;
exports.validate = method => {
    switch (method) {
        case 'registerUser':
            return [
                express_validator_1.check('username').isLength({ min: 2 }),
                express_validator_1.check('phoneNumber').isInt()
            ];
    }
};
//# sourceMappingURL=User.js.map