import React, { Component } from 'react';
import Product from '../../Models/Product';
import './ProductTableRow.css';

type Props = {
  product: Product;
  key: number;
  onDestroy: Function;
};

class ProductTableRow extends Component<Props> {
  destroy = () => {
    const {
      product: { id },
      onDestroy,
    } = this.props;
    onDestroy(id);
  };

  render() {
    const {
      product: { isInStock, name, price },
    } = this.props;

    return (
      <tr>
        <td>
          <span className={isInStock ? '' : 'out-of-stock'}>{name}</span>
        </td>
        <td>{price}</td>
        <td>
          <button type="button" onClick={this.destroy}>
            x
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductTableRow;
