import React from 'react';
import {Link} from 'react-router';

const ProtectedPage = () => {
  return (
    <div>
      <h1>You will only see this page if you are logged in</h1>
      <Link to="/" activeClassName="active">Home</Link>
    </div>
  );
};

export default ProtectedPage;
