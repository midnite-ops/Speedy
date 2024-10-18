import react from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'

function LoginPage() {

//      Varibles
let [userData, setUserData] = useState({
    rEmail: '',
    rPass: ''
})
let navigate = useNavigate()

//      Functions

//      Login User Function
async function handleSubmit(e){

    e.preventDefault()

    let login = await fetch(`http://localhost:3033/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    })
               .then(resp => resp.json())
               .then(data => {
                if(data.message === 'success'){
                    navigate(`/userhome/${data.id}`)
                }
               })
}

//      handleCHange Function
function handleChange(e) {

    if(e.target.id == 'floatingInput'){
        setUserData(prev =>{
            return {
                ...prev,
                rEmail: e.target.value
            }
        })
    }

    if(e.target.id == 'floatingPassword'){
        setUserData(prev =>{
            return {
                ...prev,
                rPass: e.target.value
            }
        })
    }
}

console.log(userData)

    return (
        <div id="loginMainCont">
            <div className="box">
                <main className="form-signin m-auto box-div">
                    <form>
                        <div className="speedy">
                        Speedy
                        </div>

                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    
                        <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={
                            handleChange
                        }/>
                        <label htmlFor="floatingInput">Email address</label>
                        </div>

                        <div className="form-floating mt-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={
                            handleChange
                        }/>
                        <label htmlFor="floatingPassword">Password</label>
                        </div>
                    
                        <div className="form-check text-start my-3">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember me
                        </label>
                        </div>

                        <button className="btn btn-dark w-100 py-2" type="submit" onClick={
                            handleSubmit
                        }>
                        <a href="html-pages/speedy.html" className="bg-body-light">Sign in</a></button>

                        <p className="my-2">Don't have an account? 
                        <a href="signup.html">Sign up here</a>
                        </p>

                        <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>

                    </form>
                </main>
            </div>
        </div>
    )
}

export default LoginPage