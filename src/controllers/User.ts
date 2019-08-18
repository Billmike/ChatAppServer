import { User } from '../entity';
import { check, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import uuid from 'uuid';
import { handleErrorGraciously } from '../utils/errorHandler';

export class UserController {
  static async registerUser(request, response) {
    try {
      const { username, phoneNumber } = request.body;

      const existingUser = await User.findOne({
        where: {
          phoneNumber
        }
      });
      if (existingUser) {
        return response.status(409).json({
          success: false,
          message: 'A user with this phone number is registered'
        })
      }

      const errors = validationResult(request);

      if (!errors.isEmpty()) {
        return response.status(422).json({
          success: false,
          errors: errors.array()
        })
      }

      const user = await User.create({
        id: uuid(),
        username,
        phoneNumber
      }).save();

      const token = jwt.sign({
        id: user.id
      },
      process.env.PRIVATE_KEY);

      return response.status(201).json({
        success: true,
        user,
        token
      });

    } catch (error) {
      handleErrorGraciously();
    }
  }
}

export const validate = method => {
  switch(method) {
    case 'registerUser':
      return [
        check('username').isLength({ min: 2 }),
        check('phoneNumber').isInt()
      ]
  }
}
