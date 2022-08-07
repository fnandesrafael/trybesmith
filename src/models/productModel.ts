import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public postProduct = async (product: Product): Promise<Product> => {
    const [queryResult] = await this.connection.query<ResultSetHeader>(`
      INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)
    `, [product.name, product.amount]);
    const id: number = queryResult.insertId;
    const newProduct: Product = { id, ...product };
    
    return newProduct;
  };

  public getProducts = async (): Promise<RowDataPacket[]> => {
    const [queryResult] = await this.connection.query<RowDataPacket[]>(`
      SELECT * FROM Trybesmith.Products
    `);
    return queryResult;
  };
}