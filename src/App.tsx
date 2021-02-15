import './App.css';
import React from 'react';
import Clock from './Clock';
import MyComponent from './MyComponent';
import ColorBlock from './ColorBlock';
import ProductContainer from './Products/ProductContainer';
import Product from './Models/Product';

const productsFromAPI = [
  new Product(1, true, 459.99, 'Musical Instruments', 'Clarinet'),
  new Product(2, true, 5000, 'Musical Instruments', 'Harpsicord'),
  new Product(3, false, 11000, 'Musical Instruments', 'Fortepiano'),
  new Product(4, true, 799, 'Furniture', 'Chaise Lounge'),
  new Product(5, false, 1300, 'Furniture', 'Dining ProductTable'),
  new Product(6, true, 100, 'Furniture', 'Bean Bag'),
];

function App() {
  return (
    <div className="App">
      {/* <Clock /> */}
      {/* <MyComponent /> */}
      {/* <ColorBlock /> */}
      <ProductContainer products={productsFromAPI} />
    </div>
  );
}

export default App;
