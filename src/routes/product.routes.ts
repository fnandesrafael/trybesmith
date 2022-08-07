import { Router } from 'express';
import ProductController from '../controllers/productController';

const router = Router();

const Product = new ProductController();

router.post('/', Product.postProduct);
router.get('/', Product.getProducts);

export default router;