import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import Generate from "../components/Generate/Generate";
import Description from "../components/Description/Desceiption";
import CardTemplate from "../components/CardGrid/CardTemplate";
import Footer from "../components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch, redirect, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";


function HomePage() {

  const {user} = useSelector(state => state.auth)
  const navigate = useNavigate()


  // console.log(!user.emailVerified);

  // React.useEffect(() => {
  //   if(!user){
  //     navigate("/login")
  //   }
  // },[navigate,user])


  return (
    <>
      <Navbar />
      <Home />
      <Generate />
      <Description />
      <CardTemplate />
      <Footer />
    </>
  );
}

export default HomePage;
