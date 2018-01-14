import React, { Component, Fragment } from 'react';

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

export default Search;