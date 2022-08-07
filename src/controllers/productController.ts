import { Request, Response } from 'express';
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
      return res.status(201).json(newProduct);
    } catch (err) {
      console.log('Erro no controller ProductController: ', err);
      return res.status(400).json('Bad Request');
    }
  };
}