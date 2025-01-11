import { createBrowserRouter, Navigate, redirect, RouterProvider } from 'react-router-dom';

import { Game, Home, Terms } from '~/pages';

import { Layout } from '~/screens';
import { GAME_ROUTE, HOME_ROUTE, TERMS_ROUTE } from '~/shared/consts/router';
import { useCookies } from '~/shared/hooks';

export const Router = () => {
  const router = createBrowserRouter([
    {
      id: 'root',
      path: HOME_ROUTE,
      element: <Layout />,

      children: [
        {
          loader: () => {
            const {objCookies} = useCookies()

            if (objCookies.age === String(false)) {
              return redirect('/terms-and-conditions')
            }

            return null
          },
          children: [
            {
              path: HOME_ROUTE,
              element: <Home />,
            },
            {
              path: GAME_ROUTE,
              element: <Game />
            },
          ]
        },
        {
          path: TERMS_ROUTE,
          element: <Terms />
        },
        {
          path: '*',
          element: <Navigate to={HOME_ROUTE} />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />
}