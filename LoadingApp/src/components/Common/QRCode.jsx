import React from 'react';
import '../../styles/QrCode.css';

const QrCode = () => {
  return (
    <div className="qr-code-container flex flex-col items-center">
      <h1 className="qr-code-title"></h1>
      <img src="src\images\QrCode.png" alt="QR Code" className="qr-code-image" />
    </div>
  );
};

export default QrCode;
