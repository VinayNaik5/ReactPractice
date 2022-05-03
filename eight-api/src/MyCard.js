import React from "react";
import { Card,CardBody,CardText, CardTitle } from "reactstrap";
import {FaEnvelope, FaMapMarkedAlt, FaPhoneAlt} from "react-icons/fa";
import {BsFillCalendar2DateFill} from "react-icons/bs";


const MyCards = ({ details }) =>{
    return(
        <Card>   
            <CardBody className="text-center">
                <img height="150" width="150"
                className="rounded-circle img-thumbnail border-danger"
                src={details.picture?.large} 
                alt=""/>
                <CardTitle className="text-primary" style={{fontSize: "40px"}}>
                        <span>   {details.name?.title}. {details.name?.first} {details.name?.last}</span>
                </CardTitle>
                <CardText style={{fontSize:"20px"}}>
                    <FaEnvelope  style={{marginRight:"15px"}}/>{details.email} 
                </CardText>
                <CardText style={{fontSize:"15px"}}>
                        <span>
                            <FaMapMarkedAlt style={{marginRight:"5px"}}/> {details.location?.city}
                            <FaPhoneAlt style={{marginRight:"5px", marginLeft:"20px"}}/> {details.phone}
                            <BsFillCalendar2DateFill style={{marginRight:"5px", marginLeft:"20px"}}/> {details.dob?.age}
                        </span>
                </CardText>
            </CardBody>
        </Card>
    )
    
}

export default MyCards;