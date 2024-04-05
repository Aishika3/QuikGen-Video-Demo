import React from "react";
import {Routes,Route} from 'react-router-dom';
import "./App.css";
import HomePage from "./Pages/HomePage";
import Register from "./components/RegisterForm/RegisterForm";
import Login from "./components/Login/Login";
import Dashboard from "./Pages/DashBoard";
import Upload from "./Pages/UploadNumber";
import { useSelector,useDispatch } from "react-redux";
import EmailVerify from "./components/EmailVerify/EmailVerify";
import { auth } from "./firebase/firebase";
import { setEmailVerified, setUser } from "./features/auth/authSlice";


function App() {

  const dispatch = useDispatch();
  // const {user,isEmailVerified} = useSelector(state => state.auth);

  // React.useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       dispatch(setUser(user));
  //       dispatch(setEmailVerified(user.emailVerified));
  //     } else {
  //       dispatch(setUser(null));
  //       dispatch(setEmailVerified(false));
  //     }
  //   });

  //   return () => unsubscribe();
  // }, [dispatch]);

  return (
    <>
      {/* <Navbar />
      <Home />
      <Generate />
      <Description />
      <CardTemplate />
      <Footer /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<EmailVerify />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
