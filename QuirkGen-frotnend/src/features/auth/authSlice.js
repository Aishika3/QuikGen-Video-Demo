import { createSlice } from "@reduxjs/toolkit";
import firebase from "../../firebase/firebase";
import { auth } from "../../firebase/firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {db} from '../../firebase/firebase'
import {collection,addDoc} from 'firebase/firestore'
import { setGenerateText } from "../text/textSlice";
import axios from "axios";

const initialState = {
    user:null,
    loading:false,
    error:null,
    isEmailVerified: false
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        setUser(state, action) {
          state.user = action.payload;
          localStorage.setItem('token', state.user.stsTokenManager.accessToken)
        },
        setLoading(state, action) {
          state.loading = action.payload;
        },
        setError(state, action) {
          state.error = action.payload;
        },
        logout(state,action){
          state.user = null
          state.input=""
          state.apiResponse=""
          localStorage.removeItem('token')
          localStorage.removeItem('user') 
          localStorage.removeItem('userInfo')
        },
        setEmailVerified(state,action){
          state.isEmailVerified = action.payload
        }
    },
})

export const {setError,setLoading,setUser,logout,setEmailVerified} = authSlice.actions

export const register = (email,password) => async (dispatch) => {
    try {
        dispatch(setLoading(true))
        // console.log("hit");
        const {user} = await createUserWithEmailAndPassword(auth,email,password)
        localStorage.setItem('email',user.email)
        localStorage.setItem('uid',user.uid)
        await addDoc(collection(db,"quirkgen"),{
          letterCount:0
        })
        dispatch(setUser(user.toJSON()))
        dispatch(setLoading(false))
        await axios.post(`https://automatic-puzzle-kidney.glitch.me/verify/${user.email}?userid=${user.uid}`,{},{
          headers:{
              Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
    } catch (error) {
        dispatch(setLoading(false));
        dispatch(setError(error.message))   
    }
};

export const signIn = (email, password) => async (dispatch) => {
    try {
      dispatch(setLoading(true));
      await signInWithEmailAndPassword(auth,email,password)
      .then((userCredential) => {
        // console.log(userCredential.user);
          // if(userCredential.user.emailVerified){
            dispatch(setEmailVerified(userCredential.user.emailVerified))
            dispatch(setUser(userCredential.user.toJSON()));
            dispatch(setGenerateText(""))
            // dispatch()
            dispatch(setLoading(false));
          // }
      })
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setError(error.message));
      // alert(erro)
    }
};
  
export default authSlice.reducer;