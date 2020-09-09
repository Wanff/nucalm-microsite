import React, { Component } from "react";
import "../Dashboard/PopUpTrack/PopUpTrack.css"
// import AudioPlayer from "../AudioPlayerUI.js"

export default class PopUp extends Component {
  handleClick = () => {
   this.props.toggle();
  };
    render() {
    return (
      <div className="modal">
        <div className="modal-content">
        <span className= "close" onClick={this.handleClick}>&times;    </span>
        <div class = "popUpContent">
            <h1>Frequently Asked Questions</h1>
            <p className = "question">Does my lifetime access allow me to use the new app? </p>
            <p className = "answer">Yes! With the lifetime access you originally purchased, you will never have to spend another dime on NuCalm<sup><sup>®</sup></sup>'s neuroacoustic software - in whatever app format it comes in. Your only ongoing cost will be for NuCalm<sup><sup>®</sup></sup> Biosignal Processing discs, and the occasional eye mask.</p>

            <p className = "question"> How do I switch over to the new app?</p>
            <p className = "answer">When the NuCalm<sup><sup>®</sup></sup> 3.0 App is available, it will show up as an update in your App Store or Google Play Store. While connected to the internet, update the app and NuCalm<sup><sup>®</sup></sup> 3.0 will appear on your phone or smart device. Please note that your old password for the NuCalm<sup><sup>®</sup></sup> app will have expired and you will need to be reset to a more secure one before you can log in to the new app. You will be emailed this information and the link to reset your password, or you can reset your password by clikcing on "Forgot Password?" in the new app. </p>
                    
            <p className = "question">Which of the new tracks are similar to the old ones? How do I find my favorite track? </p>
            <p className = "answer">We have a large collection of new and more sophisticated tracks embedded throughout the NuCalm<sup><sup>®</sup></sup> 3.0 Journeys, but we have kept your favorites in there as well. We are taking the stress out of track selection - you will choose your outcome and time, we'll give you what you need.</p>
            <p className = "answer">Power Nap Tracks - These can be found under the Recharge category. </p>
            <p className = "answer">Relax Tracks - These can be found under Reboot 40 minutes.</p>
            <p className = "answer">Recovery I - This can be found under Rescue 40 minutes.  </p>
            <p className = "answer">Recovery/Deep Recovery - These can be found under Rescue 50 minutes.</p>

            <p className = "question">Why did you replace the old app?</p>
            <p className = "answer">The old NuCalm<sup><sup>®</sup></sup> app was simply a media player designed primarily for clinical use (as for many years we operated business-to-business). In order to continue the shift to the consumer market, we needed a more user-friendly, intuitive, aesthetically appealing, and functional app. We took all of your feedback and worked with experts in app development to build a new app with new neuroacoustic software journeys and new in-app features. </p>
      
            <p className = "question">Why does my old password not work? </p>
            <p className = "answer">Your old password will no longer be valid for the new NuCalm<sup><sup>®</sup></sup> app. To get started with the NuCalm<sup><sup>®</sup></sup> 3.0 app, you will need to create a new secure password. You will be emailed this information and the link to reset your password, or you can reset your password by clikcing on "Forgot Password?" in the new app. </p>

            <p className = "question">How do I get the 50% discount on Pro discs that Jim spoke about? </p>
            <p className = "answer">Use <strong>legacy200</strong> as a promocode when buying Pro Discs from our current online store. </p>
            
            <p className = "question">What are the changes in the new app? </p>
            <p className = "answer">1. New Neuroacoustic Software: We have a vast, new library that includes new algorithms, new music, and new journeys.</p>
            <p className = "answer">2. Outcome- Driven NuCalm<sup><sup>®</sup></sup> Journeys: Now you can take the guesswork out of track selection-- just choose your time and desired outcome, and we'll provide the best track.</p>
            <p className = "answer">3. Session Statistics: You will be able to track your individual sessions, long-term usage trends, and more.</p>
            <p className = "answer">4. Learn Section: Everything you need in one place-- research, tutorials, FAQs, blogs, NuCalm<sup><sup>®</sup></sup> news, and educational articles.</p>
            <p className = "answer">5. Overall more functionality: Enjoy a fresh new look with more functionality, based on NuCalm<sup><sup>®</sup></sup> user feedback.</p>

            {/* <p className = "question">I am on a family plan subscription, how do I switch over to the new subscription to use the new app? </p>
            <p className = "answer">* Need to confirm this answer</p> */}
        </div>
        </div>
      </div>
    );
 }
}