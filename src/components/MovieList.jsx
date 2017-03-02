import React, {Component} from 'react'
import Movie from './Movie.jsx'
export default class MovieList extends Component {
  constructor (props)
  {
    super(props)
  }
  render ()
  {
    console.log(this.props.movieList);
    const movies = this.props.movieList.map((movie) => {
      return (<Movie movie={movie}/>)
    })
    return (
     <ul className="movie-list"> {movies}</ul>
    )

    /* this.props.MovieList.map((movie)=>{})
    return (
        <div>
        <ul key={this.props.}>

        </ul>
        </div>
    ) */
  }
}
