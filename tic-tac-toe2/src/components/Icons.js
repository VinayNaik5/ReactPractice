import React from "react";
import {FaPen,FaTimes,FaRegCircle} from "react-icons/fa";

const Icons = ({item}) => {
    console.log({item});
    if (item === "circle"){
        return (
            <FaRegCircle className="icons"/>
        )
    } 
    if (item === "cross"){
        return(
            <FaTimes className="icons"/>
        )
    }
    else{
        return(
            <FaPen className="icons"/>
        )
    }
}

export default Icons;