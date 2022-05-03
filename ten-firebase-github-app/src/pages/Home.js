import React, { useContext, useEffect, useState } from "react";
import  Axios  from "axios";
import {
    Row,
    Col,
    Container,
    Input,
    Button,
    InputGroup
} from "reactstrap";
import { UserContext } from "../context/UserContetx";
import { toast } from "react-toastify";
import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { useNavigate } from "react-router-dom";

const Home = () =>{

    const context = useContext(UserContext);
    const [query, setQuery] = useState('');
    const [user,setUser] =  useState(null);

    const fetchDetails = async () =>{
        try{
            const {data} =await Axios.get(`https://api.github.com/users/${query}`)
            setUser(data)
            console.log(data);

        }
        catch (error){
            toast("Not able to locate user", {type:"error"})
        }
    }


    // Put any page behind login 

    const Redirect = () =>{
       let navigate = useNavigate();
       useEffect( () => {
           navigate("/signin")
       })
       return null;
    }
    if (!context.user?.email) {
        return(
            <Redirect/>
        )
    }


    return (
        <Container>
            <Row className="mt-5">
                <Col md="5">
                    <InputGroup>
                        <Input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Please provide username"/>
                        <Button color="primary" onClick={() => {fetchDetails()}}>Fetch User</Button>
                    </InputGroup>
                    {user ? <UserCard user={user}/>: null }
                </Col>
                <Col md='7'>
                    {user ? <Repos repos_url={user.repos_url}/>: null}
                </Col>
            </Row>
        </Container>
    )
}

export default Home;