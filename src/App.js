import Home from './pages/Home/index';
import About from './pages/About/index';
import Works from './pages/Works/index';
import Work from './pages/Work/index';
import Commissions from './pages/Commissions/index';
import RootLayout from './pages/RootLayout/RootLayout';
import ScrollToTop from './components/ScrollToTop';
import Error from './pages/Error/index';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { loader as worksLoader } from './pages/Works/index';
import { loader as workLoader } from './pages/Work/index';
import { loader as portraitsLoader } from './pages/Commissions/index';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <ScrollToTop />,
    errorElement: <Error />,
    children: [
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
          {
            path: 'commissions',
            element: <Commissions />,
            loader: portraitsLoader,
          },
          { path: 'privacy-policy', element: <PrivacyPolicy /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
