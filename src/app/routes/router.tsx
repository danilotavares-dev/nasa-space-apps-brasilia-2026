import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';
import { Form } from '../../pages/Form';
import { Home } from '../../pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    index: true,
    element: <Home />,
  },
  {
    path: '/Form',
    element: <Form />,
  },
]);
