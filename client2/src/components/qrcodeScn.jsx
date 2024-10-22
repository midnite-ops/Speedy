import React, { useState } from 'react';
import QrReader from 'react-qr-scanner';
import { useLocation, useNavigate } from 'react-router-dom';

const QRScanner = () => {
  const [qrData, setQrData] = useState(null);
  let location = useLocation()
  let navigate = useNavigate()

  const handleScan = (data) => {
    if (data) {
      setQrData(data.text);
      console.log("QR Code Data: ", data.text);
    
      let qrcode = data.text
      
      let fetchApi = fetch(`http://localhost:3033/getreceipt/${qrcode}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        if(data.message == success){
            console.log('hsjxjcl')
            navigate('/receipt', {state: data})
        }
      })
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
