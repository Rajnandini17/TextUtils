import React from "react";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
// import ReactDOM from "react-dom";

function App() {
    return (
        <>
        <Navbar title="textUtils" aboutText="About"/>
        <div className="container my-3">
        <TextForm heading="Enter the text to analyze"/>
        </div>
        
        </>
           
    )
};

export default App;