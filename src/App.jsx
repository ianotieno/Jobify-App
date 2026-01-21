import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
  },
  {
    path: '/landing',
    element: <Landing />,
  },
  {
    path: '/error',
    element: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
