import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(
    /React CI CD Project using TravisCI and Docker/i
  );
  expect(linkElement).toBeInTheDocument();
});
