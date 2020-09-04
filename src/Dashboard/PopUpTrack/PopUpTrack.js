import React, { Component } from "react";
import "./PopUpTrack.css"
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
          <div className = "icon_container">
            <img className = "icon" src = {this.props.icon1}></img>
            <img className = "icon" src = {this.props.icon2}></img>
            <img className = "icon" style={{marginRight: "0"}}src = {this.props.icon3}></img>
          </div>
          <h1 style={{fontSize:"45px"}}>{this.props.title}</h1>
          {/* <div className = "popUpImageContainer">
            <img className = "popUpImage" src = {this.props.popUpImg}></img>
          </div> */}
          <p className = "popUpContentText">{this.props.text1}</p>
          <p className = "popUpContentText">{this.props.text2}</p>
          <p className = "popUpContentText">{this.props.text3}</p>
          <p className = "popUpContentText"><strong>NuCalm 2.0 Comparable: </strong>{this.props.addit_info}</p>
        </div>
        </div>
      </div>
    );
 }
}