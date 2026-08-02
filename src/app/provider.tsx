import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';

export function Provider() {
  return <RouterProvider router={router} />;
}
