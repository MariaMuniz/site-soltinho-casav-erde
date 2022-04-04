import React from "react";
import {
  BrowserRouter as Router,
  Route,

} from "react-router-dom";
import './styles.css';
import Navbar from './../../components/Navbar';
import Home from './Home';



export const Main: React.FC = () => {
  return (
    <div >
      <Router>

        <Navbar />
        <Home />



      </Router>
    </div>



  );
}
