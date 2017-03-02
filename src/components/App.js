import React, { Component } from 'react'
import apiInterface from '../apiInterface.js'
import FilterActors from './FilterActors.jsx'
import MovieList from './MovieList.jsx'
import NProgress from 'react-nprogress'
import '../../public/index.css'
export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = { moviesData: [], actors: [], filteredMovies: [] }
  }
  filterList (actorName) {
    let filterMovies = this.state.moviesData
    if (actorName === 'All') {
      filterMovies = this.state.moviesData
    }
    else {
      filterMovies = this.state.moviesData.filter((movie) => {
        return (movie.actors.includes(actorName))
      })
    }
    this.setState((oldState) => { oldState.filteredMovies = filterMovies })
  }
  componentWillMount () {
    NProgress.start()
  }
  render () {
    NProgress.done()
    return (
      <div className="Movies">
        <center> <h1>THIS WEEK MOVIES</h1></center>
        <FilterActors actorList={this.state.actors} filterMovies={this.filterList.bind(this)} />
        <MovieList movieList={this.state.filteredMovies} />
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
        // console.log(result)
        result.forEach((movieData) => {
          movieData.actors.forEach((actor) => {
            if (!(actors.includes(actor))) {
              actors.push(actor)
            }
          })
        })
        this.setState({ moviesData: result, actors: actors, filteredMovies: result })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

