import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Taskpage from './pages/Taskpage.jsx'; // SEM 's' no final de Taskpage no import

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/task',
    element: <Taskpage />,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
