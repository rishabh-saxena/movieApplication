import React, { Component } from 'react'
export default class FilterActors extends Component {
  constructor (props) {
    super(props)
  }
  updateList (event) {
    this.props.filterMovies(event.target.value)
  }
  render () {
    let actorList = this.props.actorList.map((actor) => { return (<option value={actor}>{actor}</option>) })
    return (
      <div>
        <p>Filter By Actors:<select onChange={this.updateList.bind(this)}> <option value="All">All</option>{actorList}
        </select></p>
      </div>
    )
  }
}
