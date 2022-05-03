import React from "react";
import TopNav from "./Topnav";
import Masthead from "./Masthead";
import Portfolio from "./Portfolio";
import About from "./About"
import Contact from "./Contact";
import Footer from "./Footer";
import Copyright from "./Copyright";

const App = () =>{
    return(
        <div>
            <TopNav/>
            <Masthead/>
            <Portfolio/>
            <About/>
            <Contact/>
            <Footer/>
            <Copyright/>
        </div>
    );
}

export default App;