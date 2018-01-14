import React, { Component, Fragment } from 'react';
import './App.css';
import StuffList from './components/StuffList';
import Listing from './components/listing';
import Navbar from './components/navbar';
import Search from './components/search';
import Header from './components/header'

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
        <StuffList />
      </div>
    );
  }
}

export default App;