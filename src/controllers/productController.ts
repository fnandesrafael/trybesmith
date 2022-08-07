import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/productService';
import Product from '../interfaces/product.interface';

export default class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  public postProduct = async (req: Request, res: Response) => {
    const product: Product = req.body;
    try {
      const newProduct = await this.productService.postProduct(product);
      return res.status(StatusCodes.CREATED).json(newProduct);
    } catch (err) {
      console.log('Erro no controller Product.postProduct: ', err);
      return res.status(StatusCodes.BAD_REQUEST).json('Bad Request');
    }
  };

  public getProducts = async (req: Request, res: Response) => {
    try {
      const products = await this.productService.getProducts();
      return res.status(StatusCodes.OK).json(products);
    } catch (err) {
      console.log('Erro no controller Product.getProducts');
      return res.status(StatusCodes.NOT_FOUND).json('Products Not Found');
    }
  };
}