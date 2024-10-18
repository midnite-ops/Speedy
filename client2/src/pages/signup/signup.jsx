import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'

function SignupPage() {

//      Variables
let [userData, setUserData] = useState({
    rName: '',
    rEmail: '',
    rPass: ''
})

let navigate = useNavigate()


//      Submit form Function
async function handleSubmit(e) {

    e.preventDefault()

    let sendFormData = fetch('http://localhost:3033/createuser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(userData)
    }).then(resp => resp.json())
      .then(data => {
        if(data.message == 'success'){
            navigate('/login')
        }
      })

}


//      Handle Change Function
function handleChange(e) {
    if(e.target.id == 'floatingText'){
        setUserData(prev => {
            return {
                ...prev,
                rName: e.target.value
            }
        })
    }
    if(e.target.id == 'floatingInput'){
        setUserData(prev => {
            return {
                ...prev,
                rEmail: e.target.value
            }
        })
    }
    if(e.target.id == 'floatingPassword'){
        setUserData(prev => {
            return {
                ...prev,
                rPass: e.target.value
            }
        })
    }
}

console.log(userData)

//      Return React Dom
    return (
        <div id="signupMainCont">
            <div className="box">
                <main className="form-signin m-auto box-div">

    `             <form id="form1" className="js-form" >
                        <div className="speedy">
                        Speedy
                        </div>

                        <h1 className="h3 mb-3 fw-normal">Sign Up</h1>
                    
                        <div className="form-floating mb-3">

                        <input type="text" className="form-control js-user-name inp " id="floatingText" placeholder="Name" required onChange={
                            handleChange
                        }/>

                        <label htmlFor="floatingPassword">Name</label>
                        </div>

                        <div className="form-floating">
                        <input type="email" className="form-control js-user-email inp " id="floatingInput" placeholder="name@example.com" required onChange={
                            handleChange
                        }/>
                        <label htmlFor="floatingInput">Email address</label>
                        </div>

                        <div className="form-floating mt-3">
                        <input type="password" className="form-control js-user-password inp" id="floatingPassword" placeholder="Password" required onChange={
                            handleChange
                        }/>
                        <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <a className="mt-5" href="admin-speedy.html" target="_blank">Are you and Admin? Click here</a>
                    
                        <button id="subBtn" className="btn btn-dark w-100 py-2 mt-5" type="submit" onClick={
                            handleSubmit
                        }>
                        <a href="student-page.html" className="bg-body-light js-new-user">Create account</a></button>

                    </form>
                    `
                </main>
            </div>
        </div>
    )
}

export default SignupPage