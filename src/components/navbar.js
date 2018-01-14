import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
  
      <ul className="Navbar">
        <li><Link to ="/">Home</Link></li>
        <li><Link to ="/how-it-works">How it Works</Link></li>
        <li><Link to='/sell'>Sell</Link></li>
        <li><Link to='/signup'>Sign Up</Link></li>
        <li><Link to='/basket'>Basket</Link></li>
        <h1>thing here</h1>
        <Route exact path="/how-it-works" component={Headernew}/>
      </ul>
 
    )
  }
}


function Headernew () {
  return (
    <div className ="headernew">
   <h1>hi m8</h1>
    </div> 
  )
}

export default Navbar;
