import React, {useContext} from "react";
import ThemeContext from "../contexts/ThemeContext";

const ThemeToggler = () =>{
    const [themeMode, setThemeMode] = useContext(ThemeContext);

    return (
        <div 
        onClick={()=>{
            setThemeMode(themeMode === 'light' ? "dark" : "light" )
        }}>
            <span title="switchTheme">{themeMode === "light" ? "Turn on Dark mode " : "Turn on Light mode"}</span>
        </div>
    )
}

export default ThemeToggler;