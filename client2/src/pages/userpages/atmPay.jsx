import React, { useState } from 'react';

const AtmCardInput = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  let pageData = {
    cardNum: cardNumber,
    cardHolder: cardHolder,
    expiry: expiryDate,
    cvv: cvv
  }

console.log(pageData)

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Card Submitted Successfully');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>ATM Card Input</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Card Number</label>
          <input
            type="text"
            maxLength="16"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Card Holder</label>
          <input
            type="text"
            placeholder="John Doe"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.inputRow}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Expiry Date</label>
            <input
              type="text"
              maxLength="5"
              placeholder="MM/YY"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>CVV</label>
            <input
              type="text"
              maxLength="3"
              placeholder="123"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              style={styles.input}
            />
          </div>
        </div>

        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

// Styles in JS
const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f4f4f4',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    color: '#555',
    fontSize: '14px',
  },
  input: {
    padding: '10px',
    width: '100%',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    backgroundColor: 'gray',
    color: 'white'
  },
  inputRow: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  submitButton: {
    padding: '12px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default AtmCardInput;
