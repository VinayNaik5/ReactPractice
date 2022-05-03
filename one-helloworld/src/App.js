import React from "react";
import "./style.css";
import "./Button"
import Button from "./Button";

const App= () => {

    return(
        <div>
            <h1>Hello world!!</h1>
            {/* <button className='button'>App store</button>
            <button className="button">Play store</button> */}
            <Button title={"App Store"}></Button>
            <Button title={"Play Store"}></Button>
        </div>
    );
}


export default App;