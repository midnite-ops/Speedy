import React, { useState } from 'react';
import QrReader from 'react-qr-scanner';

const QRScanner = () => {
  const [qrData, setQrData] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setQrData(data.text);
      console.log("QR Code Data: ", data.text);
      // You can process the scanned data further here
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

console.log('rendered')

  return (
    <div>
      <h2>QR Code Scanner</h2>
      <QrReader
        delay={300}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p>Scanned Data: {qrData}</p>
    </div>
  );
};

export default QRScanner;
