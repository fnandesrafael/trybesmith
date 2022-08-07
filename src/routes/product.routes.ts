import { Router } from 'express';
import ProductController from '../controllers/productController';

const router = Router();

const Product = new ProductController();

router.post('/', Product.postProduct);

export default router;