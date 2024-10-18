const qrCodeScanner = new Html5Qrcode("reader");

// Function to start the camera and scan QR codes
function startQrScanner() {
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
        alert(`QR Code detected: ${decodedText}`);
        qrCodeScanner.stop(); // Stop the scanner after a successful scan
        document.getElementById("reader").style.display = "none"; // Hide the scanner
    };

    const qrCodeErrorCallback = (errorMessage) => {
        // Handle any errors here
        console.log(`QR Code scan error: ${errorMessage}`);
    };

    const config = { fps: 10, qrbox: { width: 250, height: 250 } };

    qrCodeScanner.start({ facingMode: "environment" }, config, qrCodeSuccessCallback, qrCodeErrorCallback)
        .catch((err) => {
            console.error(`Unable to start the QR code scanner: ${err}`);
        });
}

// Event listener to start the scanner when the image is clicked
document.getElementById("startScan").addEventListener("click", () => {
    console.log('working')
    document.getElementById("reader").style.display = "block"; // Show the scanner
    startQrScanner();
});