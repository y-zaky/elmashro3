import React, { Component, Fragment } from 'react';
import Navbar from './navbar';

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

export default Header;