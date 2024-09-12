import React from 'react';
import { withTranslation } from 'react-google-multi-lang';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </div>
  );
};

// Wrap Home with withTranslation before export
export default withTranslation(Home);
