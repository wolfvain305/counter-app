// src/Button.jsx
import React from 'react';

function Button({ action, symbol }) {
  return (
    <button onClick={action} style={{ padding: '10px 20px', fontSize: '16px' }}>
      {symbol}
    </button>
  );
}

export default Button;