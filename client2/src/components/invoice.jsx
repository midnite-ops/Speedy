import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react'  

import 'bootstrap/dist/css/bootstrap.min.css'

import remita from '../assets/images/remita.jpg'
import funaiLogo from '../assets/images/cropped-ccd-logo.png'
import { Query } from 'mongoose'

const Invoice = (props) => {

//      Variable
    const location = useLocation()

    let [pageData, setPageData] = useState(location.state)
    
    console.log(pageData)

    

  return (
    <div id='invoiceMainCont'>
        <section className="box">
            <div className="user-info">
                <div className="img">
                    <img className="funai-logo" src={funaiLogo} alt="Funai logo" />
                    <img className="remita-logo" src={remita} alt="remita logo" />
                </div>
                <div className="user-details user-details-js">
                    <div className="qr">
                        <div className="qr-img-js qr-img">< QRCodeCanvas value='this is the last' /></div>
                        <div className="qr-veil-js qr-veil"></div>
                    </div>
                    <div className="user-js user"></div>
                </div>
                <div className="user-payment-info">
                    <table className="table table-striped table-hover border table-details">
                        <thead>
                            <tr>
                            <th scope="col-5">Description</th>
                            <th scope="col-5">Amount</th>
                            <th colSpan="2">Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Other Charges</td>
                                <td colSpan="3">=N=47000</td>
                            </tr>
                            <tr>
                                <td >Portal Charges</td>
                                <td colSpan="3">=N=5500</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td colSpan="3">=N=52500</td>
                            </tr>
                        </tbody>
                    </table>
                    <small className="d-block fw-bold">Kindly ensure your payment is made with an RRR generated from the portal</small>
                    <a href="checkout.html">Click here to pay with card or bank transfer</a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Invoice
