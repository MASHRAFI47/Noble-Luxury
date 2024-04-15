import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Root from './layouts/Root';
import AuthProvider from './providers/AuthProvider/AuthProvider';
import EstateDetails from './components/EstateDetails/EstateDetails';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Blogs from './pages/Blogs/Blogs';
import UpdateProfile from './pages/UpdateProfile/UpdateProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/estates.json')
      },
      {
        path: "/update_profile",
        element: <PrivateRoute><UpdateProfile /></PrivateRoute>,
      },
      {
        path: "/estate/:id",
        element: <PrivateRoute><EstateDetails /></PrivateRoute>,
        loader: () => fetch('/estates.json')
      },
      {
        path: "/blogs",
        element: <PrivateRoute><Blogs /></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
