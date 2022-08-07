import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrderService from '../services/orderService';

export default class OrderController {
  private orderService: OrderService;
  
  constructor() {
    this.orderService = new OrderService();
  }

  public getOrders = async (req: Request, res: Response) => {
    try {
      const orders = await this.orderService.getOrders();
      return res.status(StatusCodes.OK).json(orders);
    } catch (err) {
      console.log(err);
      return res.status(StatusCodes.NOT_FOUND).json('Orders Not Found');
    }
  };
}