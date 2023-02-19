import Home from './pages/Home/index';
import About from './pages/About/index';
import Works from './pages/Works/index';
import Work from './pages/Work/index';
import Commissions from './pages/Commissions/index';
import RootLayout from './pages/RootLayout/RootLayout';
import ScrollToTop from './components/ScrollToTop';
import { loader as worksLoader } from './pages/Works/index';
import { loader as workLoader } from './pages/Work/index';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {
    element: <RootLayout />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'works',
        children: [
          { index: true, element: <Works />, loader: worksLoader },
          { path: ':workId', element: <Work />, loader: workLoader },
        ],
      },
      { path: 'commissions', element: <Commissions /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <ScrollToTop />
    </RouterProvider>
  );
}

export default App;
