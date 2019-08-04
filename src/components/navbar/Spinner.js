import React from 'react';
import spinner from './spinner.gif';

const Spinner = ({ title }) => (
  <>
    <img
      src={spinner}
      alt="loading..."
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  </>
);

export default Spinner;
