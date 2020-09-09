import React from "react"
import Banner from "../components/Banner"
import {Container} from "react-bootstrap"
import ReactPlayer from "react-player/youtube"
import TypeformButton from "../components/TypeformButton"
import PopUpTrackFront from "./PopUpTrack/PopUpTrackFront"
import NuCalmHover from "../components/NuCalmHover"
import FAQFront from "../components/FAQFront"

import nucalm from "../assets/nucalm.png"
import homescreen from "../assets/nucalm3/homescreen.png"
import main_session_setup from "../assets/nucalm3/main_session_setup.png"
import session_summary from "../assets/nucalm3/session_summary.png"
import lifesaver from "../assets/nucalm_journey/lifesaver.JPG"
import fixcar from "../assets/nucalm_journey/fixcar.JPG"
import windmill from "../assets/nucalm_journey/windmill.JPG"
import pretty_lightbulb from "../assets/beta_tracks/pretty_lightbulb.JPG"
import windmill_day from "../assets/beta_tracks/windmill_day.JPG"
import sea_bench from "../assets/beta_tracks/sea_bench.JPG"
import stars from "../assets/stars.jpg"

import sleep_recovery from "../assets/outcomes/sleep-recovery.png"
import stress_relief from "../assets/outcomes/stress-relief.png"
import energy from "../assets/outcomes/energy.png"
import creativity from "../assets/outcomes/creativity.png"
import focus from "../assets/outcomes/focus.png"
import pain_management from "../assets/outcomes/pain-management.png"
import immunity_building from "../assets/outcomes/immunity-building.png"
import muscle_repair from "../assets/outcomes/muscle-repair-white.png"
import {Link } from "react-router-dom";

import "./Dashboard.css"


const Dashboard = () =>{
    return(
    <Container className="containerStyle-tracks">
    <Banner></Banner>
    <img src = {nucalm} alt = "NuCalm" className="nucalm-img-tracks"/>
    <p className = "subHero-header">NuCalm 3.0 is the next evolution of NuCalm, and it’s as comprehensive as it is revolutionary.</p>
    <p className = "subHero-tracks">Everything you need to know about NuCalm 3.0—how NuCalm 3.0 will bring you the most effective results you’ve ever experienced, how your interaction with the app will change, the benefits of already being in the NuCalm community, how to download the new app, why we evolved, and what’s next.</p>
    <ReactPlayer url='https://www.youtube.com/watch?v=yd0hVaTReIA' controls className = "nucalm-video" style={{borderRadius: "50px"}}/>
    <a target="_blank" href="https://drive.google.com/file/d/1hFJkCY6wW6UvR1UjVgMb2avK42kowX1q/view?usp=sharing">
        <button className="feedbackButton" type="" style={{width:"400px"}}>
            <p className = "feedbackText">Read Webinar Transcript</p>
        </button>
    </a>

    <h1 className = "hero-tracks"> NuCalm 3.0 Sneak Peek</h1>
        <p className = "subtext-tracks"><span className = "span-mobile-hover"> Below you will find the three main screens that correspond to experiencing a NuCalm journey. The first screen is the new home page, the second shows where you will select your journey time, and the third will display your session summary. Hover over the sidebar</span><span className = "span-mobile-read">Read the feature descriptions and check out the app screenshots</span> below to get a sneak peek of the NuCalm 3.0 App's exciting new features including a larger catalog of new neuroacoustic software, outcome-driven journeys, greater variation on time selection, session statistics, educational content, and more. </p>
    <div className = "nucalm-hover-box">

    </div>
    <div className = "nucalm_screens_container">
      

        <div className = "hover-bar">
        <NuCalmHover number = "1. " star_position={{top:"18%", left:"9%"}} title = "Daily Message Box" text = "This feature will allow us to share tips and tricks on how to best optimize your NuCalm experience. "/>
        <NuCalmHover number = "2. " star_position={{top:"39%", left:"7%"}} title = "Journey Information" text = "By clicking on any of the NuCalm journeys you will learn what each is designed to do for both the body and the mind."/>
        <NuCalmHover number = "3. " star_position={{top:"80.2%", left:"26.7%"}} title = "In App Support Function" text = "Get help on demand! This support feature will bring you right to our Help Center or connect you with the NuCalm Customer Care Team. "/>
        <NuCalmHover number = "4. " star_position={{top:"83%", left:"15.2%"}}title = "Learn" text = "Become a NuCalm expert by checking out news articles, tutorials, and our NuCalm 101 lessons. "/>
        <NuCalmHover number = "5. "star_position={{top:"83%", left:"20.6%"}} title = "Stats" text = "Coming later in September after our first launch, you will be able to see a full history of your NuCalm sessions, a your dynamic NuCalm Score, and more."/>
        <NuCalmHover number = "6. " star_position={{top:"87%", left:"28%"}} title = "My Profile" text = "Manage your profile, shop for more discs, get help, and more. "/>
        <NuCalmHover number = "7. "star_position={{top:"43%", left:"40%"}} title = "Journey Time Selection" text = "We're taking the guesswork out of journey selection - Tell us your desired outcome and how much time you have, and we'll do the rest. "/>
        <NuCalmHover number = "8. " star_position={{top:"7%", left:"53%"}} title = "Download Tracks Offline" text = "Coming soon after our first app launch - download journeys locally to play them offline!"/>
        <NuCalmHover number = "9. " star_position={{top:"76%", left:"43%"}} title = "Alarm" text = "Need an extra reminder your NuCalm session is complete - set an alarm!"/>
        <NuCalmHover number = "10. " star_position={{top:"76%", left:"52%"}} title = "Loop"text = "Great for long procedures, travel days, or going to your natural endpoint - put the loop feature on to keep the software playing.   "/>
        <NuCalmHover number = "11. " star_position={{top:"7.5%", left:"74%"}} title = "Session Summary" text = "Check out your session details and compare to previous sessions after you finish each journey. "/>
        <NuCalmHover number = "12. "star_position={{top:"45%", left:"80%"}} title = "Rate Your Session" text = "Tell us how you liked your session and we'll use machine learning in future app releases to better select tracks for you! "/>
        {/* <NuCalmHover star_position={{top:"77%", left:"76%"}} title = "Link Out To Your Tracker's App" text = "While we won't have direct intergration with heart rate trackers - we'll link you in and out of the app so that you can record your NuCalm session.   "/> */}
        </div>

        <div class="hover-bar-mobile">
            <p className = "hover-title-bar">1. Daily Message Box: This feature will allow us to share tips and tricks on how to best optimize your NuCalm experience.  </p>
            <p className = "hover-title-bar">2. Journey Information: By clicking on any of the NuCalm journeys you will learn what each is designed to do for both the body and the mind.</p>
            <p className = "hover-title-bar">3. In App Support Function: Get help on demand! This support feature will bring you right to our Help Center or connect you with the NuCalm Customer Care Team. </p>
            <p className = "hover-title-bar">4. Learn: Become a NuCalm expert by checking out news articles, tutorials, and our NuCalm 101 lessons. </p>
            <p className = "hover-title-bar">5. Stats: Coming later in September after our first launch, you will be able to see a full history of your NuCalm sessions, a your dynamic NuCalm Score, and more. </p>
            <p className = "hover-title-bar">6. My Profile: Manage your profile, shop for more discs, get help, and more.  </p>
            <p className = "hover-title-bar">7. Journey Time Selection: We're taking the guesswork out of journey selection - Tell us your desired outcome and how much time you have, and we'll do the rest.</p>
            <p className = "hover-title-bar">8. Download Tracks Offline: Coming soon after our first app launch - download journeys locally to play them offline! </p>
            <p className = "hover-title-bar">9. Alarm: Need an extra reminder your NuCalm session is complete - set an alarm! </p>
            <p className = "hover-title-bar">10. Loop: Great for long procedures, travel days, or going to your natural endpoint - put the loop feature on to keep the software playing.</p>
            <p className = "hover-title-bar">11. Session Summary: Check out your session details and compare to previous sessions after you finish each journey.</p>
            <p className = "hover-title-bar">12. Rate Your Session: Tell us how you liked your session and we'll use machine learning in future app releases to better select tracks for you!</p>
        </div>
        <div className = "nucalm_screen_container marginLeft">
            <img src = {homescreen} alt = "NuCalm Homescreen" className="nucalm_screens"/>
            <div className = "hover-number" style={{top: "17.5%", left: "9%"}}>1</div>
            <div className = "hover-number" style={{top: "41.5%", left: "86%"}}>2</div>
            <div className = "hover-number" style={{top: "86%", left: "80%"}}>3</div>
            <div className = "hover-number" style={{top: "94%", left: "28%"}}>4</div>
            <div className = "hover-number" style={{top: "94%", left: "51%"}}>5</div>
            <div className = "hover-number" style={{top: "93%", left: "75%"}}>6</div>
        </div>
        <div className = "nucalm_screen_container">
            <img src = {main_session_setup} alt = "NuCalm Session Setup" className="nucalm_screens"/>
            <div className = "hover-number" style={{top: "44%", left: "14%"}}>7</div>
            <div className = "hover-number" style={{top: "6%", left: "78%"}}>8</div>
            <div className = "hover-number" style={{top: "75.5%", left: "13%"}}>9</div>
            <div className = "hover-number" style={{top: "75%", left: "43.5%"}}>10</div>
     
        </div>
        <div className = "nucalm_screen_container">
            <img src = {session_summary} alt = "NuCalm Session Summary" className="nucalm_screens"/>
            <div className = "hover-number" style={{top: "15.5%", left: "1%"}}>11</div>
            <div className = "hover-number" style={{top: "48.7%", left: "-5%"}}>12</div>
   
        </div>
    </div>

    <h1 className = "hero-tracks"> NuCalm 3.0 Journey Details </h1>
    <p className = "subtext-tracks">We are taking the guesswork out of which track to select to simplify your set-up and maximize your outcome. Click on each journey category to learn more!</p>

    <div>
        <PopUpTrackFront img = {fixcar} text_overlay = "Recharge" title = "Recharge" icon1 = {creativity} icon2 = {stress_relief} icon3 = {focus} text1 = "This journey is the ultimate quick fix to use when you're low on energy, lacking focus, and in need of a pick-me-up. " text2 = "The concentrated neuroacoustic software rapidly takes your mind and body to a place of restoration and recovery, allowing your body to recharge on a cellular level in just 20 minutes. " text3="Afterward, you can expect to feel calm, yet energized, focused, and ready to take on the day. " addit_info = "If you're looking for songs like Power Nap I or Power Nap II, you will enjoy the Recharge journeys." popUpImg = {pretty_lightbulb} style={{left: "18%"}}/>
        <PopUpTrackFront img = {windmill} text_overlay = "Reboot" title = "Reboot" icon1 = {sleep_recovery} icon2 = {energy} icon3 = {stress_relief}text1 = "Replenish your energy, your clarity, and your confidence as multilayered sonic textures melt away your worries and your stress. " text2="The neuroacoustic software in this journey guides your mind and body to a state of deep relaxation, dissolving left-brain thinking and opening up an expanded perception. " text3="Afterward, you can expect to feel grounded, balanced, patient, calm, and inspired." addit_info = "If you're looking for songs like Relax I, Relax II, or Recovery I, you will enjoy teh Reboot 40 minute journeys." popUpImg = {windmill_day}/>
        <PopUpTrackFront img = {lifesaver} text_overlay = "Rescue" title = "Rescue" icon1 = {pain_management} icon2 = {muscle_repair} icon3 = {immunity_building} text1 = "Be liberated from habitual thoughts and reactions and travel effortlessly to a place of well-being and recovery. " text2="The neuroacoustic software in this powerful journey guides your mind and body to the optimal state for deep recovery and restoration. In this immersive sound bath where mathematics meets music, your autonomic nervous system will be able to repair, replenish, and restore wholeness. " text3 = "Afterward, you can expect to feel fully restored and ready to realize your full potential." addit_info = "If you're looking for songs like Recovery II, Recovery III, or Deep Recovery, you will enjoy the Rescue 50 minute journeys."popUpImg = {sea_bench}/>
{/* 
        <img src = {road} alt = "NuCalm Session" className="track_categories"/>
        <img src = {windmill} alt = "NuCalm Session" className="track_categories"/>
        <img src = {fixcar} alt = "NuCalm Session" className="track_categories"/>
        <img src = {lifesaver} alt = "NuCalm Session" className="track_categories"/> */}
    </div>
    
    <h1 className = "hero-tracks"> What You Need To Know For Getting Started With NuCalm 3.0</h1>

    <p className = "question_main">Does my lifetime access allow me to use the new app? </p>
    <p className = "answer_main">Yes! With the lifetime access you originally purchased, you will never have to spend another dime on NuCalm's neuroacoustic software - in whatever app format it comes in. Your only ongoing cost will be for NuCalm Biosignal Processing discs, and the occasional eye mask.</p>

    <p className = "question_main"> How do I switch over to the new app?</p>
    <p className = "answer_main">
        <ol>
            <li>The NuCalm 3.0 App will show up as an available update in the App Store or Google Play Store.</li>
            <li>You will need to reset your password the first time you log into the new app. Click on "Forgot my password" and enter in the email address associated to your NuCalm account.</li>
            <li>Check your email inbox for the reset password link. Create a new password (minimum 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 symbol). </li>
            <li>Go back to the NuCalm 3.0 App and log in with your new password.</li> 
        </ol> </p>
            
    <p className = "question_main">Which of the new tracks are similar to the old ones? How do I find my favorite track? </p>
    <p className = "answer_main">We have a large collection of new and more sophisticated tracks embedded throughout the NuCalm 3.0 Journeys, but we have kept your favorites in there as well. We are taking the stress out of track selection - you will choose your outcome and time, we'll give you what you need.</p>
    <p className = "answer_main">Power Nap Tracks - These can be found under the Recharge category. </p>
    <p className = "answer_main">Relax Tracks - These can be found under Reboot 40 minutes.</p>
    <p className = "answer_main">Recovery I - This can be found under Rescue 40 minutes.  </p>
    <p className = "answer_main">Recovery/Deep Recovery - These can be found under Rescue 50 minutes.</p>

    <FAQFront />

    {/* <h1 className = "hero-tracks"> Interested in Becoming a Beta-Tester? </h1>
     <div style={{display: "inline"}}> */}
         {/* <a href="https://nucalm.typeform.com/to/WO0qjvbp" target = "_blank" style={{color: "white"}}>
         <div className = "textoverlay_container">
         <img src = {phone} alt = "NuCalm Session Summary" className="beta_tracks"/>
         <p className = "textoverlay">Sign Up to Beta Test NuCalm 3.0</p>

         </div>
         </a> */}
         {/* <div className = "textoverlay_container">
         <img src = {stars} alt = "NuCalm Session Summary" className="beta_tracks"/>
        <p className = "textoverlay">Coming Soon: Listen to a Beta Track</p>
         </div> */}
    {/* </div> */}
    {/* <p className = "feedbacksubtext">Enjoying the unique NuCalm content? Click below to provide feedback on how we can enhance your experience.</p>
    <TypeformButton buttontext = "Comments, Questions, Concerns?"></TypeformButton> */}
</Container>
    )
}

export default Dashboard;