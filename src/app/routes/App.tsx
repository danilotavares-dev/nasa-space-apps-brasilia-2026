import { Outlet } from 'react-router-dom';

export function App() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
