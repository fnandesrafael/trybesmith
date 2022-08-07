import connection from '../models/connection';
import ProductModel from '../models/productModel';
import Product from '../interfaces/product.interface';

export default class ProductService {
  public model: ProductModel;
  
  constructor() {
    this.model = new ProductModel(connection);
  }

  public postProduct = async (product: Product): Promise<Product> => {
    const newProduct = await this.model.postProduct(product);
    return newProduct;
  };

  public getProducts = async () => {
    const products = await this.model.getProducts();
    return products;
  };
}