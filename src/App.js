import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(props){
  super(props)
  this.state = {
    listings: ['listing 1', 'listing 2']
  }
}

  render() {
    return (
      <div className="App">
       <h1>Copia</h1>
         <i>the worlds first open crypto market</i>
       <Listings value={this.state.listings} />
      </div>
    );
  }
}


class Listings extends Component {
  render() {
       return (
        this.props.value.map( (listing,index) => {
          return ( <p key={index}>{listing}</p> )
        })  
    );
  }
}

export default App;
