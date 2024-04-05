import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ExcelReader from '../../components/ExcelReader';
import Navbar from '../../components/Navbar/Navbar';
import './styles.css';
import { FaRocket } from 'react-icons/fa';
import { app,auth,db } from '../../firebase/firebase';
import { doc, setDoc } from "firebase/firestore"; 

function UploadData() {
  const [data, setData] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  function submitNumbers() {
    setSubmitting(true);


    async function upload(){
      await setDoc(doc(db, "phone-data", "MikRU8qJwy4JDu2Usi2J"), {phone: JSON.parse(data)});

    }

    upload().then((res) => {
      navigate("/dashboard");
    })
    .catch((err) => {
      console.log(err);
    })

    // db.collection("phone-data").doc("MikRU8qJwy4JDu2Usi2J").collection("phones").set(
    //   JSON.parse(data)
    // ).then(() => {
    //   alert("Success");
    //   setSubmitting(false);
    // }).catch((err) => {
    //   alert("Failure");
    //   setSubmitting(false);
    // })
  }

  return (
    <>
        <div className=" wrapper mx-auto my-[100px]">
        <ExcelReader data={data} setData={setData} className='my-[100px] excel'/>
        <br/>
        {!submitting && 
        <div className="mx-auto text-center flex flex-col w-[50%]">
            <div className='flex flex-col  mx-auto'>
                <div className='flex flex-row'>
                    <input type="checkbox" height='100' width='100' className='h-[50px] w-[50px] rounded-md'/>
                    <label className='text-white'>By clicking on Submit, you confirm that all data submitted are collected by you only after taking user consent and you have in no way undertaken unfair means for obtaining the data.</label>
                </div>
                <br/>
                
                <button onClick={submitNumbers} className='btn-save-upload w-[20%] mx-auto'>Submit</button>
                <br />
            </div>
        </div>}
        {submitting && <FaRocket className='rocket'/>}
        {/* mx-auto w-[50px] h-[50px] */}
        </div>
    </>
  );
}

export default UploadData;