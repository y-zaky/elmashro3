import React, { Component, Fragment } from 'react';
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
              <img src={listing.img}/>
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
        <li><a href='#'>How it Works</a></li>
        <li><a href='#'>Sell</a></li>
        <li><a href='#'>Sign Up</a></li>
        <li><a href='#'>My Basket</a></li>
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
