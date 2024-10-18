const QRCode = require('qrcode')

async function generateQRCode(userId, paymentId) {

    const paymentData = JSON.stringify({userId, paymentId})

    try {
        const qrCodeUrl = await QRCode.toDataURL(paymentData);
        return qrCodeUrl;
    } catch (error) {
        console.error('Error generating code:', error)
    }

    
}


//      save Code to db
async function saveQrCodeToDb(userId, qrCodeUrl) {
    
    const response = await fetch(`/api/users/${userId}/save-qrcode`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ qrCodeUrl }),
    });

    if (response.ok) {
        console.log('QR code saved successfully!');
    } else {
        console.error('Failed to save QR code');
    }

}


//      verify payment function
async function verifyPayment(qrCodeData) {
    const { userId, paymentId } = JSON.parse(qrCodeData);

    // Verify with backend
    const response = await fetch(`/api/payments/verify`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, paymentId }),
    });

    if (response.ok) {
        const result = await response.json();
        if (result.verified) {
            console.log('Payment verified successfully!');
        } else {
            console.log('Invalid payment.');
        }
    } else {
        console.error('Error verifying payment.');
    }
}


//      Display
function displayQRCode(qrCodeUrl) {
    return <img src={qrCodeUrl} alt="Payment QR Code" />;
}
