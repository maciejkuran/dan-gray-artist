import Home from './pages/Home/index';
import About from './pages/About/index';
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
