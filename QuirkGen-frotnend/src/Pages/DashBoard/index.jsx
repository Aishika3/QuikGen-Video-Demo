import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { app,auth,db } from '../../firebase/firebase';
import * as XLSX from 'xlsx';
import './styles.css';
import Navbar from '../../components/Navbar/Navbar';


function Dashboard() {
  const [users, setUsers] = useState([]);
  const userRef = doc(db, "phone-data", "MikRU8qJwy4JDu2Usi2J");
  
  useEffect(() => {
    async function getUsers(){
      await getDoc(userRef).then((res) => {
        let tempDaysArray = []
        res.data().phone.forEach((doc) => {
          tempDaysArray.push({'phone':doc.phone, 'mail': doc.mail, 'name': doc.name});
        })

        console.log(tempDaysArray);
        setUsers(tempDaysArray);
        console.log(users);
      }).catch((err) => {
        console.log(err);
      });
    }

    getUsers();
  }, [])

  return (

    <>
    <Navbar />
    <div className='div-holder flex flex-col pt-[100px]'>
      <div className='grid grid-cols-2 gap-2'>
        <Link to="/"><button className='btn-strat-camp'>Start an AI marketing campaign</button></Link>
        <button className='btn-strat-camp'>Start an email marketing campaign</button>
      </div>
      {users.length === 0 && <h1 className='text-white'>You haven't uploaded any data yet. <Link to="/" className='text-yellow'>Upload your data here</Link></h1>}
      <div className='table'>
        <ul>
            <div className='table-heading'>
              <li>Name</li>
              <li>Phone No.</li>
              <li>Email</li>
              <li>Check</li>
            </div>

            {users.map((value, index) => (
              <div key={"key"+index} className='table-data-dashboard'>
                <li className='table-name'>{value.name}</li>
                <li className='table-phone'>{value.phone}</li>
                <li className='table-mail'>{value.mail}</li>
                <li className='table-checkbox'><input type="checkbox"/></li>
              </div>
            ))}

            {
              users.length === 0 &&
              <img src="https://sundayjournalusa.com/wp-content/uploads/2016/01/no_data.png" className='mx-auto'></img>
            }
        </ul>
      </div>
    </div>
    </>
  );
}

export default Dashboard;
