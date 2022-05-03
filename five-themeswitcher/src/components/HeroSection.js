import React,{useContext} from "react";
import ThemeContext from "../contexts/ThemeContext";
import AppTheme from "../Colors";



const HeroSection = () =>{
    const [theme,setTheme] = useContext(ThemeContext);
    const currentTheme = AppTheme[theme];

    return (
        <div style={{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
            textAlign: "center"
        }}>
            <h1>Context API Theme toggler</h1>
            <p>This is nice paragraph</p>
            <button style={{
                backgroundColor:"#26ae60",
                padding: "10px 150px",
                fontSize: "20px",
                color: 'white',
                border: `${currentTheme.border}` 
            }} 
            onClick={
                () =>(
                    setTheme(theme === "light"? "dark":"light")
                )
            }>cick me</button>
        </div>
    )
}

export default HeroSection;