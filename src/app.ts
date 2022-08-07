import express from 'express';
import ProductsRouter from './routes/product.routes';
import OrderRouter from './routes/orders.routes';

const app = express();

app.use(express.json());

app.use('/products', ProductsRouter);
app.use('/orders', OrderRouter);

export default app;
