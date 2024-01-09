import React, { useState } from "react";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
// import About from "./About";
// import ReactDOM from "react-dom";

function App() {
    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        if(mode === 'light') {
            setMode ('dark');
            document.body.style.backgroundColor = '#042743';
        } else {
            setMode ('light');
            document.body.style.backgroundColor = 'white';
        }
    }
    return (
        <>
        <Navbar title="textUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
        <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode}/>
        </div>
        {/* <About /> */}
        
        </>      
    )
};

export default App;