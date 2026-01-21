import React from 'react'
import HomeLayout from './pages/ HomeLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  },
  {
    path: '/about',
    element: <div>About Page</div>
  },
]);
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
