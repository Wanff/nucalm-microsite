import React, { useState } from 'react';
import './NuCalmHover.css';

import {AiOutlineStar} from "react-icons/ai"


function NuCalmHover(props) {
    // constructor(props) {
    //     super(props);
    // }

    const [isShown, setIsShown] = useState(false);
    return (
        <div>
            <div className = {props.className}
                onMouseOver={() => setIsShown(true)}
                onMouseOut={() => setIsShown(false)} 
            >
            {/* <AiOutlineStar style= {{height: "45px", width: "45px", color: "gold"}}        
            /> */}
            <p className = "hover-title-bar">{props.number}{props.title}</p>
              </div>
              {isShown && (
                <div className = "hover-text" style={props.text_position}>
                <h3 className = "hover-title">{props.title}</h3>
                 {props.text}
                </div>
              )}
        </div>
    );
  }

export default NuCalmHover;