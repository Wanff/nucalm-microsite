import React from "react";
import PopUp from "./PopUpTrack"; 
import "./PopUpTrack.css"

class PopUpTrackFront extends React.Component {
  state = {
   seen: false
   };
  togglePop = () => {
   this.setState({
    seen: !this.state.seen
   });
  };
  
render() {
  return (
   <div style = {{display: 'inline'}}>

    <div className="popUpContainer" onClick={this.togglePop}>
        <img src = {this.props.img} className = "header-image"></img>
        <div class="text-overlay">{this.props.text_overlay}</div>
    </div>
    {this.state.seen ? <PopUp title = {this.props.title} text1 = {this.props.text1} text2 = {this.props.text2} text3 = {this.props.text3} addit_info = {this.props.addit_info} icon1 = {this.props.icon1} icon2 = {this.props.icon2} icon3 = {this.props.icon3} toggle={this.togglePop} popUpImg = {this.props.popUpImg}/> : null}

   </div>
  );
 }
}

export default PopUpTrackFront