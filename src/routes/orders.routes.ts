import { Router } from 'express';
import OrderController from '../controllers/orderController';

const Order = new OrderController();

const router = Router();

router.get('/', Order.getOrders);

export default router;