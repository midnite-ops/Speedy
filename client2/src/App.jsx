import { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import './App.css'

import SignupPage from './pages/signup/signup'
import LoginPage from './pages/login/login'
import UserHome from './pages/userpages/userHome'
import GenCharges from './pages/userpages/genCharges'
import QrCodeScn from './components/qrcodeScn'
import Invoice from './components/invoice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/gencharges/:id?' element={ < GenCharges />}></Route>
          <Route path='/invoice/:id?' element={ < Invoice />}></Route>
          <Route path='/scan' element={ < QrCodeScn />}></Route>
          <Route path='/' element={ < SignupPage /> }></Route>
          <Route path='/login' element={ < LoginPage /> }></Route>
          <Route path='/userhome/:id' element={ < UserHome />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
