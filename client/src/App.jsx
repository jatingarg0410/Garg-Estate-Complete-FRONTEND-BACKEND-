import HomePage from './pages/homePage/homePage'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom'
import ListPage from './pages/listPage/listPage'
import { Layout, RequireAuth } from './pages/layout/layout'
import SinglePage from './pages/singlePage/singlePage'
import ProfilePage from './pages/profilePage/profilePage'
import Register from './pages/register/register'
import Login from './pages/login/login'
import ProfileUpdatePage from './pages/profileUpdatePage/profileUpdatePage'
import NewPostPage from './pages/newPostPage/newPostPage'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/list',
          element: <ListPage />,
        },
        {
          path: '/:id',
          element: <SinglePage />,
        },

        {
          path: '/register',
          element: <Register />,
        },

        {
          path: '/login',
          element: <Login />,
        },
      ],
    },
    {
      path: '/',
      element: <RequireAuth />,
      children: [
        {
          path: '/profile',
          element: <ProfilePage />,
        },
        {
          path: '/profile/update',
          element: <ProfileUpdatePage />,
        },
        {
          path: '/add',
          element: <NewPostPage />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
