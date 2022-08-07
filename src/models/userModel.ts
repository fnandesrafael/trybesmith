import { Pool } from 'mysql2/promise';
import { ResultSetHeader } from 'mysql2';
import User from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }

  public postUser = async (user: User): Promise<User> => {
    const [queryResult] = await this.connection.query<ResultSetHeader>(`
      INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES(?, ?, ?, ?)
    `, [user.username, user.classe, user.level, user.password]);
    const id: number = queryResult.insertId;
    const newUser = { id, ...user };

    return newUser;
  };
}