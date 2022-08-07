import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/productInterface';

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
}