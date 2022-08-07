import { RowDataPacket } from 'mysql2';
import { Pool } from 'mysql2/promise';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getOrders = async (): Promise<RowDataPacket[]> => {
    const [queryResult] = await this.connection.query<RowDataPacket[]>(`
      SELECT orders.id, orders.userId, JSON_ARRAYAGG(products.id) AS productsIds
      FROM Trybesmith.Products AS products
      INNER JOIN Trybesmith.Orders AS orders
      ON orders.id = products.orderId
      GROUP BY orders.id
      ORDER BY orders.userId
    `);
    return queryResult;
  };
}