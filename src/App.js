import Home from './pages/Home/index';
import About from './pages/About/index';
import Works from './pages/Works/index';
import Work from './pages/Work/index';
import Commissions from './pages/Commissions/index';
import RootLayout from './pages/RootLayout/RootLayout';

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
          { index: true, element: <Works /> },
          { path: ':workId', element: <Work /> },
        ],
      },
      { path: 'commissions', element: <Commissions /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
