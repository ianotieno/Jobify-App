import React from 'react'
import { Link } from 'react-router-dom';
import { useRouterError } from 'react-router-dom';

function Error() {
  const error = useRouterError();
  console.log(error);
  return (
    <div>
      <h1>Error</h1>
      <Link to="/">Go Back Home</Link>
    </div>
  )
}

export default  Error