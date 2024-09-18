import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import Games, { gamesLoader } from './pages/Games';
import Game, { gameLoader } from './pages/Game';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/games',
    element: <Games />,
    loader: gamesLoader,
  },
  {
    path: '/games/:route',
    element: <Game />,
    loader: gameLoader,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
