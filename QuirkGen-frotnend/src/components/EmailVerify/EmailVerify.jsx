import React from 'react'
import './email.css'
import logo from '../../assets/images/logo.png'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setEmailVerified, setUser, setVerified } from '../../features/auth/authSlice'
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from '../../firebase/firebase'

const EmailVerify = () => {

    const {user} = useSelector(state => state.auth)
    // console.log(user);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {isEmailVerified} = useSelector(state => state.auth)
    // console.log(isEmailVerified);

    

    // if(user && isEmailVerified){
    //     navigate("/")
    //     clearInterval(checkVerified)
    // }

    React.useEffect(() => {
      const checkVerified = setInterval(async () => {
        const response = await axios.post(`https://automatic-puzzle-kidney.glitch.me/status/${localStorage.getItem('email')}`)
        dispatch(setEmailVerified(response.data))
        if (response.data === true) {
          clearInterval(checkVerified)
          navigate("/")
        }
      }, 5000)
    
      return () => {
        clearInterval(checkVerified)
      }
    }, [])

  return (
    <div>
         <div className="container">
      <div className="register-image"></div>
      <div className="form">
        <div className='header'>
            <div className='header-logo'>
                <img src={logo} alt='logo' />
                <p>automaite.ai</p>
            </div>
            <p className='header-text'>Automate with AI and Ease</p>
            <p className='heading'>Check your mail</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default EmailVerify