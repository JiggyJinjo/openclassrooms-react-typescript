import React, { ChangeEvent, Component } from 'react';
import Proptypes from 'prop-types';
import Product from '../Models/Product';

type Props = {
  filterText: string;
  inStockOnly: boolean;
  onFilter: Function;
};

class ProductFilters extends Component<Props> {
  filterTextChanged = (e: ChangeEvent<HTMLInputElement>) =>
    this.props.onFilter({
      filterText: e.target.value,
    });

  isInStockChanged = (e: ChangeEvent<HTMLInputElement>) =>
    this.props.onFilter({
      inStockOnly: e.target.checked,
    });

  render() {
    const { filterText, inStockOnly } = this.props;
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={this.filterTextChanged}
        />

        <p>
          <label>
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={this.isInStockChanged}
            />
            Only show products in stock
          </label>
        </p>
      </form>
    );
  }
}

export default ProductFilters;
