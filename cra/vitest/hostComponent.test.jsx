import { render } from 'react-dom';
import HostComponent from '../host/src/hostComponent';
import { expect, test } from 'vitest';
import { createElement } from 'react';

test('renders host project component with provided title', () => {
  const container = document.createElement('div');
  render(createElement(HostComponent, { text: 'Hello Vitest!' }), container);
  expect(container.innerHTML).toBe('<div><h2>Hello Vitest!</h2></div>');
});