import React from "react";
import "./ClickyImage.css";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately

const ClickyImage = props => (

    <div className="col-4">
        <img src={props.image} className="img-thumbnail img-fluid imageStyle" alt={props.id} onClick={() => props.handleClick(props.id)} />
    </div>

)


export default ClickyImage;