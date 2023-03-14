import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Works from './index';

const data = {
  1: {
    img: 'https://website.com/some-img',
    size: '30x40',
    title: 'First Title',
    type: 'acrylic on canvas',
    year: 2015,
  },
  2: {
    img: 'https://website.com/some-img',
    size: '20x20',
    title: 'Second Title',
    type: 'acrylic on canvas',
    year: 2016,
  },
};

const routes = [
  {
    path: '/works',
    element: <Works />,
    loader: () => data,
  },
];

const router = createMemoryRouter(routes, { initialEntries: ['/', '/works'] });

describe('Works -> index.js component testing fetching data', () => {
  test('there are 2 view buttons rendered', async () => {
    render(<RouterProvider router={router} />);
    const viewButtons = await screen.findAllByRole('button', { name: /view/i });
    expect(viewButtons).toHaveLength(2);
  });
});
