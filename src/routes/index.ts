import express from 'express';
import { UserController, validate } from '../controllers/User';
import { MessageController, ChatController } from '../controllers'

const router = express.Router();

/**
 * Endpoint to register new user
 */
router.post(
  '/user/register',
  validate('registerUser'),
  UserController.registerUser
  );

/**
 * Endpoint to send new message
 */
router.post('/message', MessageController.sendMessage);

/**
 * Endpoint to fetch user's chats
 */
router.get('/chat/:userId', MessageController.fetchUserChats);

/**
 * Endpoint to fetch the messages in a single chat
 */
router.get('/message/:chatId', MessageController.fetchChatMessage)

/**
 * Endpoint to create the new chat session
 */
router.post('/chat', ChatController.createChatRoom);

export default router;
