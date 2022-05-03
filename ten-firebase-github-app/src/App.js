import React,{useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// React-router
import {BrowserRouter as Router , Routes, Route, Link, Switch} from "react-router-dom";

// import "react-toastify/dist/ReactToastify.min.css"


//firebase 
import {initializeApp} from "firebase/app"
import "firebase/auth"

import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';

import { UserContext } from './context/UserContetx';
import { ToastContainer } from 'react-toastify';
import Footer from './layout/Footer';
import Header from './layout/Header';
import FirebaseConfig from './firebaseConfig/FirebaseConfig';


//init firebase 
initializeApp(FirebaseConfig);


function App() {

  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer></ToastContainer>
      <UserContext.Provider value={{user, setUser}}>
        <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
