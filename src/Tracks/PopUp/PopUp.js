import React, { Component } from "react";
import "./PopUp.css"
import AudioPlayer from "../AudioPlayerUI.js"

export default class PopUp extends Component {
  handleClick = () => {
   this.props.toggle();
  };
    render() {
    return (
      <div className="modal">
        <div className="modal-content">
        <span className= "close" onClick={this.handleClick}>&times;    </span>
        <AudioPlayer className="audioPlayer"/>
        </div>
      </div>
    );
 }
}