import React, { Component } from 'react';
import Product from '../Models/Product';

type Props = {
  onFormSubmit: Function;
};
type State = {
  product: Product;
  isError: boolean;
};
class ProductForm extends Component<Props, State> {
  state: State = {
    product: new Product(0, true, 0, '', ''),
    isError: false,
  };

  validateInputs(value: string) {
    this.setState({ isError: !value });
    return !!value;
  }

  handleSave = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      product: { name },
      product,
    } = this.state;
    if (this.validateInputs(name)) {
      this.props.onFormSubmit(product);
    }
    e.preventDefault();
  };

  nameChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState((prevState) => {
      const { value } = e.target;
      prevState.product.name = value;
      const isError = !value;

      return { product: prevState.product, isError };
    });

  categoryChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState((prevState) => {
      prevState.product.category = e.target.value;
      return { product: prevState.product };
    });

  priceChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState((prevState) => {
      const { value } = e.target;
      prevState.product.price = value === '' ? 0 : parseInt(value, 10);
      return { product: prevState.product };
    });

  isInStockChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState((prevState) => {
      prevState.product.isInStock = e.target.checked;
      return { product: prevState.product };
    });

  render() {
    const { category, price, name, isInStock } = this.state.product;
    return (
      <form>
        <h3>Enter a new product</h3>
        <p>
          <label>
            Name
            <br />
            <input
              type="text"
              name="name"
              onChange={this.nameChanged}
              value={name}
            />
            <span
              style={{
                color: 'red',
                display: this.state.isError ? 'initial' : 'none',
              }}
            >
              {' '}
              Please fill out this info
            </span>
          </label>
        </p>
        <p>
          <label>
            Category
            <br />
            <input
              type="text"
              name="category"
              onChange={this.categoryChanged}
              value={category}
            />
          </label>
        </p>
        <p>
          <label>
            Price
            <br />
            <input
              type="number"
              name="price"
              onChange={this.priceChanged}
              value={price}
            />
          </label>
        </p>
        <p>
          <label>
            <input
              type="checkbox"
              name="stocked"
              onChange={this.isInStockChanged}
              checked={isInStock}
            />
            &nbsp;In stock?
          </label>
        </p>
        <input type="submit" value="Save" onClick={this.handleSave} />
      </form>
    );
  }
}

export default ProductForm;
