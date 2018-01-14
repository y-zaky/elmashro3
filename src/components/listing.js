import React, { Component, Fragment } from 'react';

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

export default Listing; 