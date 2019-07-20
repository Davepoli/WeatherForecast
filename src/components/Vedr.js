import React from "react";


const Vedr = props => (
        <div>
            { <p className="city">{props.cityName.toUpperCase()}</p> }
            { <p className="iconTemp"><img className="icon" src={props.iconURL} />{props.temp_c}°</p> }
            { <p className="topText">{props.text}</p> }
        </div>
)
export default Vedr;