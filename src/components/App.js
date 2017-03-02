import React, { Component } from 'react'
import apiInterface from '../apiInterface.js'
import FilterActors from './FilterActors.jsx'
import MovieList from './MovieList.jsx'
export default class App extends Component {
  constructor (props)
  {
    super(props)
    this.state = {moviesData: [], actors: []}
  }
  render () {
    return (
      <div className="Movies">
     <center> <h1>THIS WEEK MOVIES</h1></center>
     <FilterActors actors={this.state.actors}/>
     <MovieList movieList={this.state.moviesData}/>
      </div>
    )
  }
  componentDidMount () {
    apiInterface.readMovieData().then((result) => {
      return result.json()
    })
      .then((result) => {
        // this.setState({ todos: result })
        let actors = []
        let actorMovies = []
        //console.log(result)
        result.forEach((movieData) =>
        {
          movieData.actors.forEach((actor) => {
            if (!(actors.includes(actor))) {
              actors.push(actor)
            }
          })
        })
        this.setState({moviesData: result, actors: actors})
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

