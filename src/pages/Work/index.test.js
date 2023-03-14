import { screen, render } from '@testing-library/react';
import Work from './index';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

const data = {
  id: 1,
  year: 2020,
  img: 'https://img.com',
  size: '20X20',
  title: 'Tested Title',
  type: 'acrylic on canvas',
};

const routes = [
  {
    path: '/works/:workId',
    element: <Work />,
    loader: () => data,
  },
];

const router = createMemoryRouter(routes, { initialEntries: ['/', '/works/1'] });

describe('testing index.js -> Page component', () => {
  test('correct data is rendered', async () => {
    render(<RouterProvider router={router} />);

    const heading = await screen.findByRole('heading', { name: /title/i });
    const id = await screen.findByTestId('id');
    const p = await screen.findByTestId('work-details');
    const els = [heading, id, p];
    els.forEach(el => expect(el).toBeInTheDocument());
  });
});
