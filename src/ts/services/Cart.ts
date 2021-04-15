import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  totalPrice(): number {
    return this._items.reduce((accumulator: number, item: Buyable): number => {
      let total = accumulator;
      total += item.price;
      return total;
    }, 0);
  }

  totalPriceWithDiscount(discount: number): number {
    return this.totalPrice() * ((100 - discount) / 100);
  }

  deleteItem(id: number): boolean {
    const index = this._items.findIndex((product: Buyable): boolean => product.id === id);
    if (index !== -1) {
      this._items.splice(index, 1);
      return true;
    }

    return false;
  }

  get items(): Buyable[] {
    return [...this._items];
  }
}
