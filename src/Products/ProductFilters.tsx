import React, { ChangeEvent, Component } from 'react';
import Proptypes from 'prop-types';
import Product from '../Models/Product';

type Props = {
  filterText: string;
  inStockOnly: boolean;
  onFilter: Function;
};

class ProductFilters extends Component<Props> {
  filterTextChanged(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    this.props.onFilter({
      filterText: value,
    });
  }
  isInStockChanged(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.checked;
    this.props.onFilter({
      inStockOnly: value,
    });
  }

  render() {
    const { filterText, inStockOnly } = this.props;
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={(e) => this.filterTextChanged(e)}
        />

        <p>
          <label>
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => this.isInStockChanged(e)}
            />
            Only show products in stock
          </label>
        </p>
      </form>
    );
  }
}

export default ProductFilters;
