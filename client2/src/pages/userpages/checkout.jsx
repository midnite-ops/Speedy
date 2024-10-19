import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

const Checkout = () => {

//      Variables
const [loaded, setLoaded] = useState(false)

//      Function

//      handlePayBtn Function
function handlePayBtn() {
    setLoaded(true)
}


  return (
    <div id='checkoutMainCont'>

        { loaded ?
            <main>
                <div className="box">

                    <form>
                        <div className="speedy">
                            Speedy
                        </div>

                        <h1 className="h3 mb-3 fw-normal">Payment details</h1>
                        <div className="form-floating mt-3">
                            <input type="text" className="form-control" id="floatingText" placeholder="Password" disabled />
                            <label htmlFor="floatingPassword" className="name-js">Name</label>
                            </div>

                            <div className="form-floating mt-3 mb-3">
                            <input type="phone" className="form-control" id="floatingInput" placeholder="Password" required />
                            <label htmlFor="floatingPassword">remita </label>
                            </div>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput1" placeholder="name@example.com" required />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>

                        <div className="form-floating mt-3">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                            <label htmlFor="floatingPassword">Phone number</label>
                        </div>
                        
                        <button className="btn btn-primary w-100 mt-5 py-2" type="submit">
                            Pay Now
                        </button>
                    </form>

                </div>
            </main>
            :
            <div>
                   <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput1" placeholder="name@example.com" required />
                            <label htmlFor="floatingInput">Remita RRR</label>
                        </div>
                        <button className="btn btn-primary w-100 mt-5 py-2" type="submit" onClick={
                            handlePayBtn
                        }>
                            Pay Now
                        </button>

            </div>
        }
     
    </div>
  )
}

export default Checkout
