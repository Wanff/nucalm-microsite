import React from "react"
import PopUpFront from "./PopUp/PopUpFront"; 
import nucalm from "../assets/nucalm.png"
import {Container} from "react-bootstrap"
import Banner from "../components/Banner"

import TypeformButton from "../components/TypeformButton"

const Tracks = () =>{
    return(
        <Container className="containerStyle-tracks">
            <Banner></Banner>
            <img src = {nucalm} alt = "NuCalm" className="nucalm-img-tracks"/>
            <p className = "subHero-tracks">Through working with Dr. Holloway and Dan Selene, the NuCalm team continues to develop new paths for you to elicit unique experiences. We wish to give our legacy users an immersive involvement with unreleased content to further excel in your NuCalm journey. Please provide us with any of your suggestions below. Happy NuCalming!</p>
            <h1 className = "hero-tracks"> Tracks </h1>
            <div>
            <PopUpFront />
            <PopUpFront />
            <PopUpFront />
            </div>

            <p className = "feedback-subtext">Enjoying the content? Click below to provide feedback on how we can enhance your experience</p>
            <TypeformButton></TypeformButton>
        </Container>
    );
};



export default Tracks