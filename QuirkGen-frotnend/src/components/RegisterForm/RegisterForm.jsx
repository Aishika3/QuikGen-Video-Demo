import React from 'react';
import logo from '../../assets/images/logo.png'
import './registerform.css'
import { useDispatch, useSelector } from 'react-redux';
import { register, setError } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

    const [name,setName] = React.useState("")
    const [email,setEmail] = React.useState("")
    const [phone,setPhone] = React.useState("")
    const [password,setPassword] = React.useState("")

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const {loading,error,user} = useSelector(state => state.auth)

    const handleSubmit = async(e) => {
        e.preventDefault()
        dispatch(register(email,password))
        setName("")
        setEmail("")
        setPassword("")
        setPhone("")
        if(error && error === "Firebase: Error (auth/email-already-in-use)."){
            console.log(error);
            dispatch(setError(""))
            alert("User already exists")
            return
        }
        navigate("/")
    }



  return (
    <div className="container-reg">
      <div className="register-image"></div>
      <div className="form">
        <div className='header'>
            <div className='header-logo'>
                <img src={logo} alt='logo' />
                <p>automaite.ai</p>
            </div>
            <p className='header-text descript'>Automate with AI and Ease</p>
            <p className='heading descript'>Sign In</p>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className='input-element'>
                <div className='form-element'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='register-input-box' />
                </div>
                <div className='form-element'>
                    <label htmlFor='name'>Phone Number</label>
                    <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} className='register-input-box' />
                </div>
                <div className='form-element'>
                    <label htmlFor='name'>Email</label>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} className='register-input-box' />
                </div>
                <div className='form-element'>
                    <label htmlFor='name'>Password</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='register-input-box' />
                </div>
                <button type='submit' className='btn-submit' disabled={loading}>{loading ? 'Signing up...' : 'Sign Up'}</button>
                <p className='text'>Already Registered? <span onClick={() => navigate("/login")}>Log In</span></p>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
