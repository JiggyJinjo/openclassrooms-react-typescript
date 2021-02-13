export interface IProduct {
  id: number;
  price: number;
  isInStock: boolean;
  category: string;
  name: string;
}

export default class Product implements IProduct {
  constructor(
    public id: number,
    public isInStock: boolean,
    public price: number,
    public category: string,
    public name: string
  ) {}
}
