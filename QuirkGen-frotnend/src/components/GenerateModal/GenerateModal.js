import Loader from "../Loader/Loader";
import "./Modal.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setResponseText } from "../../features/api/apiResponseSlice";
import {
  addDoc,
  collection,
  getDoc,
  updateDoc,
  doc,
  increment,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useState } from 'react';
import './Modal.css';
// import {addDoc,collection,getDoc,updateDoc,doc, increment} from 'firebase/firestore'
// import {db} from '../../firebase/firebase'
import { setGenerateText } from '../../features/text/textSlice';
import { fetchCombinedData } from '../../features/api/apiActions';


const GenerateModal = ({
  isOpen,
  onClose,
  children,
  companyName,
  companyDesc,
  motivation,
}) => {
  const [isLoaderOpen, setIsLoaderOpen] = useState(false);

  // const openLoaderModal = () => {
    // };
    // console.log(companyName,companyDesc,motivation);
    
    const text = useSelector((state) => state.input);
    
    const { user } = useSelector((state) => state.auth);
    
    const dispatch = useDispatch();
  
  const {loading} = useSelector(state => state.apiResponse)
  
  const [limitExceeded,setLimitExceeded] = useState(false)
    
    if (!isOpen) {
      return null;
    }
  
  const handleSubmit = async() => {
    if(!companyDesc || !companyName || !motivation || !text){
      alert("Please fill all the details");
      return;
    }

    setIsLoaderOpen(true);
    await dispatch(fetchCombinedData({text,user,companyName,companyDesc,motivation}))
    .then(res => {
      setIsLoaderOpen(false);
      toast("Your posts are here! Scroll below.")
    }).catch(err => {
      setIsLoaderOpen(false);
      toast("Sorry, failed to fetch your posts.")
    })
    
     // onClose(); 
    
  }

  return (
    <div className="modal-overlay-generate">
      <div className="modal-content-generate">
        <ToastContainer />
        <button className="modal-close-generate" onClick={onClose}>
          &times;
        </button>
        {children}
        {/* <a
          className="modal-button-generate"
          onClick={handleSubmit}
        >
          Submit
        </a> */}
        <button className="modal-button-generate" onClick={handleSubmit} disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
        <Loader isLoaderOpen={isLoaderOpen}>
          <img className="loading" src="/gifs/loading.gif"/>
        </Loader>
{/* {children} */}

      </div>
    </div>
  );
};

export default GenerateModal;

