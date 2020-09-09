import React from "react";
import "./Home.css";
import { Link } from 'react-router-dom';
import Banner from "../components/Banner"
import { Container } from 'react-bootstrap';
import nucalm from "../assets/nucalm.png"
import lock from "../assets/lock.svg"

const Home = () => {
  return (
    <Container> 
    <Banner></Banner>
    <img src = { nucalm } alt = "NuCalm" className = "nucalm-img-home"/>
    {/* <h1  className="hero">Welcome to the NuCalm Beta-Testing Site!</h1> */}
    <h3 className="subHero">Welcome to the NuCalm® private access site. This site is used to engage with current NuCalm® lifetime users. We want to know how we can develop and deliver technologies that help you live better lives. To do that, we need to share ideas, prototypes, and new advancements so we can get your feedback. We appreciate you and are honored to serve you. Let's do great things together!</h3>
    <div className="buttonDiv">
    <Link to="/beta">      
      <button className="loginButton" to="/app/beta">
        {/* <img src = { lock } alt = "lock"></img> */}
        <p className = "loginText">LOGIN</p>
      </button>
    </Link>
    </div>
  </Container>
  );
};

export default Home;