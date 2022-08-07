import express from 'express';
import ProductsRouter from './routes/product.routes';

const app = express();

app.use(express.json());

app.use('/products', ProductsRouter);

export default app;
