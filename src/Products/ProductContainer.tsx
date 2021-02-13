import React, { Component } from 'react';
import ProductFilters from './ProductFilters';
import ProductTable from './Table/ProductTable';
import ProductForm from './ProductForm';
import Product from '../Models/Product';

type Props = {
  products: Array<Product>;
};

type State = {
  products: Array<Product>;
  filterText: string;
  inStockOnly: boolean;
};

class ProductContainer extends Component<Props, State> {
  state: State = {
    products: this.props.products,
    filterText: '',
    inStockOnly: false,
  };

  handleFilter(filterInput: Pick<State, 'filterText' | 'inStockOnly'>) {
    this.setState(filterInput);
  }

  addProduct(product: Product) {
    this.setState((prevState) => {
      const newProduct = { ...product, id: prevState.products.length + 1 };
      const products = [...prevState.products, newProduct];
      return { products };
    });
  }

  deleteProduct(productID: number) {
    this.setState((prevState) => {
      const products = prevState.products.filter((p) => p.id !== productID);
      return { products };
    });
  }

  render() {
    const { products, filterText, inStockOnly } = this.state;
    return (
      <div>
        <ProductFilters
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilter={(filterInput: Pick<State, 'filterText' | 'inStockOnly'>) =>
            this.handleFilter(filterInput)
          }
        />
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
          onProductDelete={(productID: number) => this.deleteProduct(productID)}
        />
        <ProductForm
          onFormSubmit={(product: Product) => this.addProduct(product)}
        />
      </div>
    );
  }
}

export default ProductContainer;
