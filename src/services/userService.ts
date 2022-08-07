import UserModel from '../models/userModel';
import connection from '../models/connection';
import User from '../interfaces/user.interface';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public postUser = async (user: User): Promise<User> => {
    const newUser = await this.model.postUser(user);
    return newUser;
  };
}