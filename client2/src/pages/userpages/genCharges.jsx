import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css'

import Invoice from '../../components/invoice'

const GenCharges = () => {
//      variable
let [pageData, setPageData] = useState({
    name: '',
    session: '',
    feeType: '',
    rrr: '',
    level: '',
    matNo: ''
})

let navigate = useNavigate()
const params = useParams()

let [payInvoice, setPayInvoice] = useState(false)

//      Functions
//      handle Change
function handleChange(e) {
    let {value, id} = e.target

    setPageData(prev =>{
        return {
            ...prev,
            [id]: value
        }
    })
}

//      handleSubmit
function handleSubmit(e){
    e.preventDefault()

    console.log('s')

    if(pageData.name && pageData.session && pageData.session && pageData.level){

        let randomNumber = Math.floor(Math.random()*1000000)
        let num = `01021${randomNumber}`
        let rrr = num.substring(0, 10)

        pageData.rrr = rrr

        navigate('/invoice', {state: pageData})
        

    } else {
        console.log('complete form')
    }
}


console.log(pageData)



  return (
    <div id='genChargesMainCont'>

            <nav className="navbar bg-body-tertiary">

                <div className="container">

                <a className="navbar-brand" href="#" >
                    Speedy
                </a>
                </div>

            </nav>

            <section className="container body">

                <div className="info-container">
                    <h1 className="header-h1">Other Charges</h1>

                    <div className="user-info-js">

                        <div className="info">
                            <p>Fullname:</p>
                            <input id='name' type="text" placeholder="Fullname" className="username-js" required onChange={
                                handleChange
                            }/>
                        </div>

                        <div className="info">
                            <p>Session:</p>
                            <select id='session' className="form-select session-js" aria-label="Default select example" required onChange={
                                handleChange
                            }>
                                <option defaultValue>Select Session</option>
                                <option value="2024-2025">2024-2025</option>
                                <option value="2023-2024">2023-2024</option>
                                <option value="2022-2023">2022-2023</option>
                            </select>
                        </div>

                        <div className="info">
                            <p>Student Type:</p>
                            <p className="student-type-js">REGULAR</p>
                        </div>

                        <div className="info">
                            <p>FeeType:</p>
                            <select id='feeType' className="form-select fee-js" aria-label="Default select example" required onChange={
                                handleChange
                            }>
                                <option defaultValue>Select Fee Type</option>
                                <option value="FULL PAYMENT">FULL PAYMENT</option>
                                <option value="FIRST INSTALLMENT">FIRST INSTALLMENT</option>
                                <option value="SECOND INSTALLMENT">SECOND INSTALLMENT</option>
                            </select>
                        </div>
                        
                        <div className="info">
                            <p>Level:</p>
                            <select id='level' className="form-select level-js" aria-label="Default select example" required onChange={
                                handleChange
                            }>
                                <option defaultValue>Select The Level</option>
                                <option value="100 LEVEL">100 LEVEL</option>
                                <option value="200 LEVEL">200 LEVEL</option>
                                <option value="300 LEVEL">300 LEVEL</option>
                                <option value="400 LEVEL">400 LEVEL</option>
                                <option value="500 LEVEL">500 LEVEL</option>
                            </select>
                        </div> 

                        <div className="info">
                            <p>Matric No:</p>
                            <p className="number-js">2020/SC/16710</p>
                        </div>

                    </div>
                    
                    <button onClick={
                        handleSubmit
                    }>
                        Generate invoice
                    </button>
                </div>

            </section>
        
    </div>
  )
}

export default GenCharges
