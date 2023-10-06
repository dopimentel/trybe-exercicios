import Client from "./Client";
import OrderItem from "./OrderItem";

export default class Order {
  private _client: Client;
  private _items: OrderItem[] = [];
  private paymentMethod: string;
  private _discount: number = 0;

  constructor(client: Client,
    items: OrderItem[],
    paymentMethod: string,
    discount: number) {
    this._client = client;
    this._items = items;
    this.paymentMethod = paymentMethod;
    this._discount = discount;
  }
  getClient(): Client {
    return this._client;
  }
  setClient(value: Client) {
    this._client = value;
  }
  getItems(): OrderItem[] {
    return this._items;
  }
  setItems(value: OrderItem[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo menos 1 item.');
    }
    this._items = value;
  }
  getPaymentMethod(): string {
    return this.paymentMethod;
  }
  setPaymentMethod(value: string) {
    this.paymentMethod = value;
  }
  getDiscount(): number {
    return this._discount;
  }
  setDiscount(value: number) {
    if (value < 0) {
      throw new Error('O desconto não pode ser menor que zero.');
    }
    this._discount = value;
  }
  getTotal(): number {
    return this._items
      .reduce((acc, cur) => acc + cur.getPrice(), 0)
  }
  getTotalWithDiscount(): number {
    return this.getTotal() * (1 - this._discount);
  }
}