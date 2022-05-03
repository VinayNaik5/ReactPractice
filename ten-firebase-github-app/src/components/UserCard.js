import React from "react";
import {Card,CardBody} from "reactstrap";

const UserCard = ({user}) =>{
    return(
        <Card className="text-center mt-3 mb-4">
            <img src={user.avatar_url} className="img-thumbnail"/>
            <CardBody>
                <div className="text-primary">Name: {user.name}</div>
                <div className="text-primary">Location : {user.location ? user.location : "Null"}</div>
                <div className="text-primary">{user.bio ? user.bio : ""}</div>
                <div className="text-info">Available to Hire: {user.hireable ? "Yes" : "No"}</div>
                <div className="text-info">Followers: {user.followers}</div>
            </CardBody>
        </Card>
    )
}

export default UserCard;