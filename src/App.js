import React, { Component } from 'react';

import Search from './components/Search';



class App extends Component {
  render () {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 mx-auto'>
              <h1 className='text-center mb-1 p-3'> Chuck Norris Jokes </h1>
              <Search/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
