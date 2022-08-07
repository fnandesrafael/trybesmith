import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { uid } from 'rand-token';
import UserService from '../services/userService';
import User from '../interfaces/user.interface';

export default class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public postUser = async (req: Request, res: Response) => {
    const user: User = req.body;

    try {
      await this.userService.postUser(user);
      return res.status(StatusCodes.CREATED).json({ token: uid(64) });
    } catch (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).json('Bad Request');
    }
  };
}