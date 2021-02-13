import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App.tsx';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/products/i);
  expect(linkElement).toBeInTheDocument();
});
