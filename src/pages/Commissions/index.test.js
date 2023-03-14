import { screen, render } from '@testing-library/react';
import Commissions from './index';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

const data = {
  p1: { img: 'https://...1' },
  p2: { img: 'https://...2' },
  p3: { img: 'https://...3' },
};

const routes = [
  {
    path: '/commissions',
    element: <Commissions />,
    loader: () => data,
  },
];

const router = createMemoryRouter(routes, {
  initialEntries: ['/', '/commissions'],
});

describe('Commissions page component', () => {
  test('renders 3 images properly', async () => {
    render(<RouterProvider router={router} />);
    const imgs = await screen.findAllByRole('img');
    imgs.forEach(img => expect(img).toBeInTheDocument());
    expect(imgs).toHaveLength(3);
  });
});
