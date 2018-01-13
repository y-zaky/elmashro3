import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listings: [{title: 'listing 1', image:'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg', description:'you should buy this'}, 'listing 2', 'listing 3', 'listing 4', 'listing 5', 'listing 6', 'listing 7', 'listing 8'],
      trendingItems: ['ps4', 'xbox1', 'nintendo switch']
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <section className = "listings-container">
          <Listing value={this.state.listings} />
        </section>
      </div>
    );
  }
}


class Listing extends Component {
  render() {
    return (
        this.props.value.map((listing, index) => {
          return (
            <div className="listing" key={index}>
              {listing.title}
              <img alt="listing" src={listing.img}/>
              {listing.description}
            </div>)
        })
    );
  }
}

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

function Header () {
  return (
    <div className ="header">
    <section className="logo-title">
      <h1>elmashro3</h1>
      <i>the worlds first open market</i>
    </section>
    <Navbar />
    </div> 
  )
}

function Headernew () {
  return (
    <div className ="headernew">
   <h1>hi m8</h1>
    </div> 
  )
}



function Search () {
    return (
      <section className = "search-container">
        <input className="search" placeholder="search elmashro3, live lavishly"/>
        <CategoriesDropdown className="categories-dropdown" />
      </section>
    )
}

function CategoriesDropdown () {
  return (
    <button className ="categories-dropdown">Categories</button>
    
  )
}

export default App;
