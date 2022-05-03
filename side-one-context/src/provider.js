import React, {useState} from "react";
import packageContet from "./context";

const Provider = props =>{
    const [mission,setMisson] = useState({
        mname : "Go to russia",
        agent : "007",
        accept : "Not accepted"
    })
    return (
        <packageContet.Provider value={{
            data :mission,
            isMissionAccepted :() =>{
                setMisson({...mission,accept:"ACCEPTED"})
            }
        }}>
            <h1>Hello</h1>
            {props.children}
        </packageContet.Provider>

    )
}

export default Provider;