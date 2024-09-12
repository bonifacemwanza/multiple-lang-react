import React from 'react';
import { withTranslation } from 'react-google-multi-lang';

const Register = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <p>Please register to continue.</p>
    </div>
  );
};

// Wrap Register with withTranslation before export
export default withTranslation(Register);
