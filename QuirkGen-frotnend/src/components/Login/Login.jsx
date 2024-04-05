import React from 'react'
import './login.css'
import left_arm from '../../assets/images/left_arm.png'
import right_arm from '../../assets/images/right_arm.png'
import logo from '../../assets/images/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { setError, signIn } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email,setEmail] = React.useState("")
    const [password,setPassword] = React.useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {loading,error,user} = useSelector(state => state.auth)

    React.useEffect(() => {
        if(user){
            navigate("/")
        }
    },[navigate,user])




    const handleSubmit = async(e) => {
        e.preventDefault()
        dispatch(signIn(email,password))
    }

    if(error && error === "Firebase: Error (auth/user-not-found)."){
        alert("User does not exist")
        dispatch(setError(""))
        navigate("/register")
    }
    
    if(error && error === "Firebase: Error (auth/wrong-password)."){
        alert("Please enter correct email or password")
        setEmail("")
        setPassword("")
        dispatch(setError(""))
    }
    if(error && error === "Firebase: Error (auth/invalid-email)."){
        alert("Please enter valid email")
        setEmail("")
        setPassword("")
        dispatch(setError(""))
    }

  return (
    <div className='container'>
        <div className='left'>
            <img src={left_arm} />
        </div>
        <div className='login-form'>
            <div className="header">
                <div className='logo'>
                    <img src={logo} alt='logo' />
                    <p className='header-text descript'>Automaite.ai</p>
                </div>
                <p className='descript'>Automate with AI and Ease</p>
            </div>
            <div className='login-form-elements'>
                <h2 className='welcome'>Welcome back!</h2>
                <div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className='form-element'>
                            <label className='descript' htmlFor='email'>Email</label>
                            <input type='text' value={email} id='email' onChange={(e) => setEmail(e.target.value)} className='login-input-box' />
                        </div>
                        <div className='form-element'>
                            <label className='descript' htmlFor='password'>Password</label>
                            <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} className='login-input-box' />
                        </div>
                        <button type='submit' className='btn-submit' disabled={loading}>{loading ? 'Logging in...' : "Log in"}</button>
                        <p className='text'>Not Registered? <span onClick={() => navigate("/register")}>Register</span></p>
                    </form>
                </div>
            </div>
        </div>
        <div className='right'>
            <img src={right_arm} className='right-arm' />
        </div>
    </div>
  )
}

export default Login