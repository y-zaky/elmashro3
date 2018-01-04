import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listings: ['listing 1', 'listing 2']
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Listings value={this.state.listings} />
      </div>
    );
  }
}


class Listings extends Component {
  render() {
    return (
      this.props.value.map((listing, index) => {
        return (<p key={index}>{listing}</p>)
      })
    );
  }
}

class Navbar extends Component {
  render() {
    return (
      <ul className="Navbar">
        <li><a href='#'>How it Works</a></li>
        <li><a href='#'>Sell an item</a></li>
        <li><a href='#'>Sign Up</a></li>
      </ul>
    )
  }
}

function Header () {
  return (
    <section className="Header">
      <h1>elmashro3</h1>
      <i>the worlds first open market</i>
    </section>
  )
}

export default App;
