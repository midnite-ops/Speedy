import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { useLocation } from 'react-router-dom';

// Mock data that can be dynamically fetched or passed as props


const ReceiptPage = () => {
    let location = useLocation()
    let data = location.state.data
    console.log(data)

    const receiptData = {
        RRR: data.rrr,
        Name: data.payerName,
        Level: '400',
        Session: '2023/2024',
        Fee: data.fee,
        Amount: data.amount,
        qrcode: data. receiptQrcode
      };
      

  return (
    <div style={styles.container}>
      {/* QR Code at the Top Right */}
      <div style={styles.qrCodeContainer}>
        <QRCodeCanvas value={receiptData.qrcode} size={100} />
      </div>

      {/* Receipt Content */}
      <div style={styles.receipt}>
        <h2 style={styles.header}>Receipt</h2>
        <div style={styles.field}>
          <span style={styles.label}>RRR:</span>
          <span style={styles.value}>{receiptData.RRR}</span>
        </div>
        <div style={styles.field}>
          <span style={styles.label}>Name:</span>
          <span style={styles.value}>{receiptData.Name}</span>
        </div>
        <div style={styles.field}>
          <span style={styles.label}>Level:</span>
          <span style={styles.value}>{receiptData.Level}</span>
        </div>
        <div style={styles.field}>
          <span style={styles.label}>Session:</span>
          <span style={styles.value}>{receiptData.Session}</span>
        </div>
        <div style={styles.field}>
          <span style={styles.label}>Fee:</span>
          <span style={styles.value}>{receiptData.Fee}</span>
        </div>
        <div style={styles.field}>
          <span style={styles.label}>Amount:</span>
          <span style={styles.value}>{receiptData.Amount}</span>
        </div>
      </div>
    </div>
  );
};

// Inline styles for quick styling
const styles = {
  container: {
    position: 'relative',
    width: '600px',
    margin: '0 auto',
    border: '1px solid #ddd',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
    height: '500px'
  },
  qrCodeContainer: {
    position: 'absolute',
    top: '20px',
    right: '20px',
  },
  receipt: {
    padding: '20px 0',
  },
  header: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '20px',
  },
  field: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    textAlign: 'right',
  },
};

export default ReceiptPage;
