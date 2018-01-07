import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listings: ['listing 1', 'listing 2', 'listing 3', 'listing 4', 'listing 5', 'listing 6', 'listing 7', 'listing 8'],
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
          return (<div class="listing" key={index}>{listing}</div>)
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

class Search extends Component {
  render() {
    return (
      <input className="search" placeholder="search elmashro3, live lavishly"/>
    )
  }
}

export default App;
