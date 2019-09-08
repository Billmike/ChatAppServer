import { Chat } from '../entity';
import uuid from 'uuid';
import { handleErrorGraciously } from '../utils/errorHandler';

export class ChatController {
  static async createChatRoom(request, response) {
    try {
      const { chatId, chatType } = request.body;

      const existingChat = await Chat.findOne({
        where: {
          chatId
        }
      });

      if (existingChat) {
        return response.status(409).json({
          message: 'Chat already exists',
          success: false
        })
      }

      const newChatRoom = await Chat.create({
        id: uuid(),
        chatId,
        chatType
      }).save();

      return response.status(201).json({
        success: true,
        newChatRoom
      });
    } catch (error) {
      handleErrorGraciously();
    }
  }
}
