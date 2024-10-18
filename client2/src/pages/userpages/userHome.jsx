import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'

import img1 from '../../assets/images/payment-icon.webp'


function UserHome() {
    
    return(
        <div id="userHomeMainCont">
            <nav className="navbar bg-body-tertiary fixed-top">
                <div className="container">
                    <a className="navbar-brand speedy" href="#">
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

            <main>
            <div className="payment-body">
                <div className="payment-img-div">
                <a href="index.html"  className="payment-img js-payment-img">
                    <img src={img1} alt="a payment-icon" />
                </a>
                <h1>Make a payment</h1>
                </div>
            </div>
            </main>
        </div>
    )
}

export default UserHome