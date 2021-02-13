import React, { Component } from 'react';
import './ProductTableHeader.css';
import Sort from '../../Models/Sort';

type Props = {
  column: string;
  sort: Sort;
  handleSort: Function;
};

class ProductTableHeader extends Component<Props> {
  handleSort(e: React.MouseEvent<HTMLButtonElement>) {
    this.props.handleSort(this.props.column, e.currentTarget.name);
    console.log(e);
  }

  render() {
    const {
      column,
      sort: { column: sortColumn, direction },
    } = this.props;
    const currentSort = column === sortColumn ? direction : false;
    return (
      <th>
        {column}
        <button
          type="button"
          className={currentSort === 'asc' ? 'selected' : undefined}
          onClick={(e) => this.handleSort(e)}
          name="asc"
        >
          ↑
        </button>
        <button
          type="button"
          className={currentSort === 'desc' ? 'selected' : undefined}
          onClick={(e) => this.handleSort(e)}
          name="desc"
        >
          ↓
        </button>
      </th>
    );
  }
}

export default ProductTableHeader;
