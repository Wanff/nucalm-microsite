import React from "react";
import PopUp from "./FAQ"; 
import "./Button.css"

class FAQFront extends React.Component {
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
        <button className="feedbackButton" type="" onClick={this.togglePop} style={{width:"400px"}}>
            <p className = "feedbackText">Read More FAQs</p>
        </button>
    {this.state.seen ? <PopUp toggle={this.togglePop}/> : null}
   </div>
  );
 }
}

export default FAQFront