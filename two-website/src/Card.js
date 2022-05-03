import React from "react";
import NotFound from "./notfound.png"
 

const Card = ({title= "default card name",btnText = "defult buttontext", imgUrl= NotFound}) =>{
    return (
        <div className="card" style={{width: "18rem"}}>
        <img
          src = {imgUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-success">{btnText}</a>
        </div>
      </div>
    );
}

export default Card;