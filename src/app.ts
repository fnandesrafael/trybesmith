import express from 'express';
import ProductsRouter from './routes/product.routes';
import OrderRouter from './routes/order.routes';
import UserRouter from './routes/user.routes';

const app = express();

app.use(express.json());

app.use('/products', ProductsRouter);
app.use('/orders', OrderRouter);
app.use('/users', UserRouter);

export default app;
