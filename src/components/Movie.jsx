import React, {Component} from 'react'
export default class Movie extends Component {
  ratingColors (rating)
  {
    let ratingColor
    if (rating === 1 || rating === 2) {
      ratingColor = 'red'
      return ratingColor
    }
    if (rating === 3 || rating === 4) {
      ratingColor = 'blue'
      return ratingColor
    }
    if (rating === 5) {
      ratingColor = 'green'
      return ratingColor
    }
  }
  render ()
  {
    let style = {backgroundColor: this.props.movie.theme, width: 1000, height: 25}
    let ratingColor = this.ratingColors(this.props.movie.rating)
    let ratingStyle = {color: ratingColor}
    let actorList = this.props.movie.actors.map((actor) => { return (<li>{actor}</li>) })
    return (
        <li>
        <div>
        <div style={style}></div>
        <center><h2>{this.props.movie.name}</h2></center>
        <i>{this.props.movie.description}</i>
        <h3>Actors</h3>
        <div><ol>{actorList}</ol></div>
        <p style={ratingStyle}>Rating:{this.props.movie.rating}/5</p>
        <p>Released On:{this.props.movie.releaseDate}</p>
        </div>
        </li>
    )
  }
}
