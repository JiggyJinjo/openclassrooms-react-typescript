import React, { Component } from 'react';
import Proptypes from 'prop-types';
import ProductTableHeader from './ProductTableHeader';
import ProductTableRow from './ProductTableRow';
import Sort from '../../Models/Sort';
import Product from '../../Models/Product';

type Props = {
  products: Array<Product>;
  filterText: string;
  inStockOnly: boolean;
  onProductDelete: Function;
};

type State = {
  sort: Sort;
};

class ProductTable extends Component<Props, State> {
  state: State = {
    sort: {
      column: 'name',
      direction: 'asc',
    },
  };

  sortProducts(): Array<Product> {
    const { products } = this.props;

    const sortByColumnAndDirection = (objA: Product, objB: Product) => {
      const {
        sort: { column, direction },
      } = this.state;
      const isAsc = direction === 'asc' ? 1 : -1;
      // @ts-ignore
      const [a, b] = [objA[column], objB[column]];
      if (a > b) {
        return isAsc;
      }
      return -1 * isAsc;
    };

    return products.sort(sortByColumnAndDirection);
  }

  handleSort(column: string, direction: string) {
    this.setState({
      sort: {
        column,
        direction,
      },
    });
  }

  render() {
    const { filterText, inStockOnly, onProductDelete } = this.props;
    const { sort } = this.state;
    const rows = this.sortProducts()
      .filter(
        ({ name, isInStock }) =>
          ((inStockOnly && isInStock) || !inStockOnly) &&
          name.toLowerCase().includes(filterText.toLowerCase())
      )
      .map((product) => (
        <ProductTableRow
          product={product}
          key={product.id}
          onDestroy={(productID: number) => onProductDelete(productID)}
        />
      ));
    return (
      <div>
        <table>
          <thead>
            <tr>
              <ProductTableHeader
                column="name"
                sort={sort}
                handleSort={(col: string, dir: string) =>
                  this.handleSort(col, dir)
                }
              />
              <ProductTableHeader
                column="price"
                sort={sort}
                handleSort={(col: string, dir: string) =>
                  this.handleSort(col, dir)
                }
              />
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
