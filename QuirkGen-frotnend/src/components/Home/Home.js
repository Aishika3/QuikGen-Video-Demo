import React from "react";
import "./home.css";
import bg from "../../assets/images/home_image.jpg";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <p>Create</p>
          <h1 className="home-heading">AWESOME</h1>
          <p className="text-home">
            Unleash your creativity and streamline your social media strategy
            using our website's automated post generation. Create shareable
            content that drives engagement and grows your online presence.
          </p>
          {/* <div className="btn-holder"> */}
            {/* <a href="#">Start!</a> */}
          {/* </div> */}
        </div>
        <div className="image">
          <img className="img_home" src={bg} />
        </div>
      </section>
    </>
  );
};

export default Home;
