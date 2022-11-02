import React, { useState, useEffect, useRef } from 'react';

import generateRandomUsername from './generateRandomUsername.js';

const username = () => {
  const usernameRef = useRef(null);

  useEffect(() => {}, []);

  const genRandomUsername = () => {
    usernameRef.current.value = generateRandomUsername();
  };

  return (
    <>
      <input
        ref={usernameRef}
        type="text"
        defaultValue=""
        type="text"
        placeholder="enter-username"
      />
      <button onClick={genRandomUsername}> 🎲 </button>
    </>
  );
};

export default username;
