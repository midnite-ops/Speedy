import React, { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

function QrCodeScn() {

//      Variable
    const [isScanning, setIsScanning] = useState(false)
    const readerRef = useRef(null)
    const qrCodeScannerRef = useRef(null)

//      Function 
useEffect(() =>{

    //Cleanup code 
    return () =>{
        if(qrCodeScannerRef.current) {
            qrCodeScannerRef.current.stop().catch((err) => console.error(err))
        }
    }

}, [])

const startQrScanner = () =>{
    const qrCodeSuccessCallback = (decodedText, decodedResults) =>{
        alert(`Qr Code: ${decodedText}`)
        qrCodeScannerRef.current.stop()
        setIsScanning(false)
    }
}

const qrCodeErrorCallback = (errorMessage) => {
    console.log(`qr code Scan error: ${errorMessage}`)
}

const config = {fps: 10, qrbox: {width: 250, height: 250}}

qrCodeScannerRef.current
.start({facingMode: "environment"}, config, qrCodeSuccessCallback, qrCodeErrorCallback)
.catch((err) => {
    console.error(`Unable to start the qr code scanner: ${err}`)
})

function handleStartScanClick(){
    if(!isScanning){
        qrCodeScannerRef.current = new Html5Qrcode(readerRef.current.id)
        startQrScanner()
    }
}

    return (
        <div>
            <button onClick={handleStartScanClick}>
            {isScanning ? "Scanning..." : "Start QR Code Scan"}
            </button>
    
            {/* This div is where the QR code scanner will render */}
            {isScanning && <div className="reader" ref={readerRef} style={{ width: "300px", height: "300px" }}></div>}
      </div>
    )
}

export default QrCodeScn