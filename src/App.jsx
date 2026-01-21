import React from 'react'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>home</h1>,
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
