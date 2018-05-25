import React, { Component } from 'react';
import Home from './Home';
import Car from './Car';
import Dog from './Dog';
import Name from './Name'

class Me extends Component {
  render() {
    return (
      <div>
        <Name/>
        <Home/>
        <Car/>
        <Dog/>
      </div>
    )
  }
}

export default Me