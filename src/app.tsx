import { Outlet } from 'react-router-dom';
import { globalStyles } from './global-styles';

export function App() {
  globalStyles();

  return (
    <div>
      <Outlet />
    </div>
  );
}
