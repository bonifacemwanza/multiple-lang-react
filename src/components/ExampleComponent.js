import React from 'react';
import { withTranslation } from 'react-google-multi-lang';
const ExampleComponent = () => {
  return (
    <div className="page_wrapper">
      <h1>Coding 4 Bread</h1>

      <p>hey guys, my name is Boniface and i love coding !</p>

      <p>Like and subcribe ! ;) </p>
    </div>
  );
};
export default withTranslation(ExampleComponent);