import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import scannerImg from '../assets/images/scanner.jpg'
import QRScanner from './qrcodeScn'



const Admin = () => {
//      Variables
let [scanner, setScanner] = useState(false)

//      Functions
function handleImgClick(){
    setScanner(true)
}



  return (
    <div id='adminMainCont'>

     <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand speddy" href="#">
            Speedy
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">
                
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">History</a>
                </li>
              </ul>

            </div>
          </div>

        </div>
    </nav>

        { !scanner ?
            <main>
            <div className="box">
                <img className="scanner" src={scannerImg} alt="scanner" id="startScan" onClick={
                    handleImgClick
                }/>
            </div>
            <div id="reader" className="reader"></div>
            </main>
        :
            < QRScanner />
        }
      
        
    </div>
  )
}

export default Admin
