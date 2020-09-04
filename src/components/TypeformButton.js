import React, { Component} from "react"
import * as typeformEmbed from "@typeform/embed"
import "./Button.css"

class TypeformButton extends Component{
    componentDidMount(){
        const feedbackPopUp = typeformEmbed.makePopup(
            'https://nucalm.typeform.com/to/SxE9zNjS',
            {
                mode:'popup',
                onSubmit: function(){
                    console.log("typeform submitted")
                }
            }
        )
        document.getElementById('feedback-bt').addEventListener('click', function(){
            feedbackPopUp.open();
        });
    }

    render(){
        return (
            <div>
                <button id = "feedback-bt" className="feedbackButton" type="">
                <p className = "feedbackText">{this.props.buttontext}</p>
                </button>
            </div>
        )
    }
}

export default TypeformButton;