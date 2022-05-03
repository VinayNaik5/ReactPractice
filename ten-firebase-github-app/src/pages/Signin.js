import React, { useContext, useEffect, useState } from "react";

import {
    Container,
    Form,
    FormGroup,
    Button,
    Label,
    Col,
    Input,
    Row,
    Card,
    CardBody,
    CardFooter,
    CardHeader
} from 'reactstrap'; 


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

//import firebase from 'firebase/app';
import { UserContext } from "../context/UserContetx";
import  {useNavigate}  from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';;


const Signin = () =>{

    const context= useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const handleSignUp = () =>{
    //     firebase
    //     .auth()
    //     .create()
    //     .then(
    //         response =>{
    //             console.log(response);
    //             context.setUser({emil: response.user.email , uid: response.user.uid })
    //         }
    //     )
    //     .catch(error => {
    //         console.log(error);
    //         toast(error.message, {
    //             type:"error"
    //         })
    //     })
    // }


    const handleSignUp = () =>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then( res => {
            console.log(res);
            context.setUser({email: res.user.email, uid: res.user.uid})
        })
        .catch( e => {
            console.log(e);
            toast(e.message,{
                 type: "error"
            })
        })
    }

    const handleSubmit = e =>{
        e.preventDefault()
        handleSignUp();
    }
    const Redirect = () =>{
        let navigate = useNavigate();
        useEffect(()=>{
            navigate("/")
        })
        return null;
    }
    if(context.user?.uid){
        return (
           <Redirect />
        )
    }
    return (
		<Container className='text-center'>
        <ToastContainer/>
			<Row>
				<Col lg={6} className='offset-lg-3 mt-5'>
					<Card>
						<Form onSubmit={handleSubmit}>
							<CardHeader className=''>Signin here</CardHeader>
							<CardBody>
								<FormGroup row>
									<Label for='email' sm={3}>
										Email
									</Label>
									<Col sm={9}>
										<Input
											type='email'
											name='email'
											id='email'
											placeholder='provide your email'
											value={email}
											onChange={e => setEmail(e.target.value)}
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for='password' sm={3}>
										Password
									</Label>
									<Col sm={9}>
										<Input
											type='password'
											name='password'
											id='password'
											placeholder='your password here'
											value={password}
											onChange={e => setPassword(e.target.value)}
										/>
									</Col>
								</FormGroup>
							</CardBody>
							<CardFooter>
								<Button type='submit' block color='primary'>
									Sign In
								</Button>
							</CardFooter>
						</Form>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Signin;