import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css'

const Checkout = () => {

//      Variables
const [loaded, setLoaded] = useState(false)

let navigate = useNavigate()
let location = useLocation()

console.log(location.state)

let recData = location.state


//      Function

//      handlePayBtn Function
function handleContBtn() {
    setLoaded(true)
}


  return (
    <div id='checkoutMainCont'>

        { loaded ?
                <div className="box" >

                    <form style={{display: 'flex', flexDirection: 'column', gap: "10px"}}>
                        <div className="speedy">
                            Speedy
                        </div>

                        <h1 className="h3 mb-3 fw-normal">Payment details</h1>

                        <div style={{width: '300px', display: 'flex', alignItems: 'center' ,justifyContent: 'space-between'}} className="form-control" id="floatingText">
                                <div  id="floatingText">Name:</div>
                                <div  id="floatingText"> {recData.name ? recData.name : 'John Doe'}</div>
                        </div>

                        <div style={{width: '300px', display: 'flex', alignItems: 'center' ,justifyContent: 'space-between'}} className="form-control" id="floatingText">
                                <div  id="floatingText">RRR:</div>
                                <div  id="floatingText"> {recData.rrr ? recData.rrr : '0912839422'}</div>
                        </div>

                        <div style={{width: '300px', display: 'flex', alignItems: 'center' ,justifyContent: 'space-between'}} className="form-control" id="floatingText">
                                <div  id="floatingText">Fee:</div>
                                <div  id="floatingText"> {recData.fee ? recData.fee : 'School fees'}</div>
                        </div>

                        <div style={{width: '300px', display: 'flex', alignItems: 'center' ,justifyContent: 'space-between'}} className="form-control" id="floatingText">
                                <div  id="floatingText">Amount:</div>
                                <div  id="floatingText"> {recData.amount ? recData.amount : '#20,000'}</div>
                        </div>

          
                        
                        <button style={{marginTop: '20px'}} type="submit" onClick={(e) =>{
                            e.preventDefault();
                            navigate('/atmcard', {state: recData})
                        }}>
                            Pay Now
                        </button>
                    </form>

                </div>
            :
            <div>
                   <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput1" defaultValue={recData.rrr ? recData.rrr : ''} placeholder="name@example.com" required />
                            <label htmlFor="floatingInput">Remita RRR</label>
                        </div>
                        <button className="btn btn-primary w-100 mt-5 py-2" type="submit" onClick={
                            handleContBtn
                        }>
                            Continue
                        </button>

            </div>
        }
     
    </div>
  )
}

export default Checkout
