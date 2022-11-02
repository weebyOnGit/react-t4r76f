import React from 'react';
import './style.css';

import Username from './components/Username.jsx';
import Toastify from './components/Toastify.jsx';

export default function App() {
  return (
    <div>
      <Username />
      <br />
      <Toastify />
    </div>
  );
}
