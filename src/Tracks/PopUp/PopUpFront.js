import React from "react";
import PopUp from "./PopUp"; 
import "./PopUp.css"

class PopUpFront extends React.Component {
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
    </div>
    {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
   </div>
  );
 }
}

export default PopUpFront