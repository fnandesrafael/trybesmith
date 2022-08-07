import OrderModel from '../models/orderModel';
import connection from '../models/connection';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public getOrders = async () => {
    const orders = this.model.getOrders();
    return orders;
  };
}