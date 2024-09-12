import React from 'react';
import { withTranslation } from 'react-google-multi-lang';

const Landing = () => {
  return (
    <div>
      <h1>Welcome to the Landing Page!</h1>
      <p>This is the landing page of the website.</p>
    </div>
  );
};

// Wrap Landing with withTranslation before export
export default withTranslation(Landing);