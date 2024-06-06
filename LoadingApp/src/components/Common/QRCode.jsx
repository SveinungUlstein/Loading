import React from 'react';
import '../../styles/Common/QrCode.css';

const QrCode = () => {
  return (
    <div className="qr-code-container flex flex-col items-center">
      <h1 className="qr-code-title"></h1>
      <img src="src\images\QrCode.png" alt="QR Code" className="qr-code-image" />
      <h1>PIN KODE 123</h1>
    </div>
  );
};

export default QrCode;
