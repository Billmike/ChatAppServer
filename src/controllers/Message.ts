import { Message } from '../entity';
import uuid from 'uuid';
import { handleErrorGraciously } from '../utils/errorHandler';

export class MessageController {
  static async sendMessage(request, response) {
    try {
      const { userId, chatId, message } = request.body;

      const newMessage = await Message.create({
        id: uuid(),
        userId,
        chatId,
        message
      }).save();

      return response.status(201).json({
        success: true,
        newMessage
      });
    } catch (error) {
      handleErrorGraciously();
    }
  }

  static async fetchChatMessage(request, response) {
    try {
      const { chatId } = request.params;
      const messages = await Message.findAndCount({
        where: {
          chatId
        }
      });
      return response.status(200).json({
        success: true,
        messages
      })
    } catch (error) {
      handleErrorGraciously();
    }
  }

  static async fetchUserChats(request, response) {
    try {
      const { userId } = request.params;
      const userChats = await Message.find({
        where: {
          userId
        }
      });
      return response.status(200).json({
        success: true,
        userChats
      });
    } catch (error) {
      handleErrorGraciously();
    }
  }
}
