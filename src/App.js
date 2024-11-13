import React from "react";
import "./App.css"; // Link to your CSS file
import Feature from "./component/Feature";
import baleno from './carimage/baleno.jpeg';
import Feedback from './component/Feedback';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
function App() {
  return (
    <div className="app-container">
    <Navbar/>
      <Feedback/>
      <Footer/>
    </div>
  );
}

export default App;