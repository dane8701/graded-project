import { render } from 'react-dom';
import RemoteComponent from '../host/src/remoteComponent';
import { expect, test } from 'vitest';
import { createElement } from 'react';

test('renders remote project component with provided title', () => {
  const container = document.createElement('div');
  render(createElement(RemoteComponent, { title: 'Hello Vitest!' }), container);
  expect(container.innerHTML).toBe('<div><h2>Hello Vitest!</h2></div>');
});