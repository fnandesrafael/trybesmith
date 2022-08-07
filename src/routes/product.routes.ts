import { Router } from 'express';
import ProductController from '../controllers/productController';

const Product = new ProductController();

const router = Router();

router.post('/', Product.postProduct);
router.get('/', Product.getProducts);

export default router;