import { RouterProvider } from 'react-router-dom';
import { ToastProvider } from '../components/Toast';
import { router } from './routes/router';

export function Provider() {
  return (
    <ToastProvider>
      <RouterProvider router={router} />
    </ToastProvider>
  );
}
