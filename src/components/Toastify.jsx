import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastify = () => {
  const genToast = () => {
    toast('Message Send');
    console.log('yes');
  };

  return (
    <>
      <button id="sub" onClick={genToast}>
        {' '}
        Make Toast{' '}
      </button>
      <ToastContainer />
    </>
  );
};

export default toastify;
