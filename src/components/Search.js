import React, { Component } from 'react'
import axios from 'axios'

class Search extends Component {
  constructor () {
    super()
    this.state = {
      queryText: '',
      apiUrl: 'https://api.chucknorris.io',

      jokes: [],
      title: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.searchQuery = this.searchQuery.bind(this)
  }
  handleChange (e) {
    this.setState({ queryText: e.target.value })
  }
  searchQuery (e) {
    this.setState(
      {
        [e.target.name]: this.state.queryText
      },
      () => {
        if (this.state.queryText === '') {
          this.setState({ jokes: [], title: '' })
        } else {
          axios
            .get(
              `${this.state.apiUrl}/jokes/search?query=${this.state.queryText}`
            )
            .then(res =>
              this.setState({ jokes: res.data.result, title: 'Jokes' })
            )
            .catch(err => console.log(err))
        }
      }
    )
    e.preventDefault()
  }

  render () {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div class='col-12 col-md-10 col-lg-8'>
            <form className='card card-sm' onSubmit={this.searchQuery}>
              <div className='card-body row no-gutters align-items-center'>
                <div className='col'>
                  <input
                    name='queryText'
                    type='text'
                    placeholder='Search a Chuck Norris Joke'
                    className='form-control form-control-lg form-control-borderless '
                    value={this.state.queryText}
                    onChange={this.handleChange}
                  />
                </div>
                <div className='col-auto'>
                  <button
                    type='submit'
                    value='Search'
                    className='btn btn-primary'>
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <br />
        <div className='out'>
          <h1 className='text-center'> {this.state.title} </h1>
          <ul className='list-group'>
            
            {this.state.jokes.map(bloop => (
              <li className='list-group-item d-flex flex-column justify-content-between '>
                <img
                  className='align-self-center mb-1'
                  src={bloop.icon_url}
                  alt=''
                />
                <p className='text-center'> {bloop.value} </p>{' '}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Search
