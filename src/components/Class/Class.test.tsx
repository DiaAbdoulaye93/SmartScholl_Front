import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Class from './Class';

describe('<Class />', () => {
  test('it should mount', () => {
    render(<Class />);
    
    const class = screen.getByTestId('Class');

    expect(class).toBeInTheDocument();
  });
});