import React, { Component } from 'react'
import AddFavorite from './AddFavorites'

class RestaurantList extends Component {
  state = { searchString: '', searchTime: '' }

  handleChange = (e) => {
    this.setState({ searchString: e.target.value });
  }
  handleTime = (e) => {
    this.setState({ searchTime: e.target.value });
  }

  render() {
    var restaurants = this.props.restaurants,
      searchString = this.state.searchString.trim().toLowerCase();
    if (searchString.length > 0) {
      restaurants = restaurants.filter(function (i) {
        return i.restaurant.toLowerCase().match(searchString)
      });
    };
    var searchTime = this.state.searchTime.trim().toLowerCase();
    if (searchTime.length > 0) {
      restaurants = restaurants.filter(function (i) {
        return i.time.toLowerCase().match(searchTime)
      });
    }

    let collection = this.props.collection
    return (
      <div className="project-list section">
        <div className="input-field">
          <div className="row">
            <div className="col s6"><input type="text" className="placeholder-white white-text" value={this.state.searchString} onChange={this.handleChange} placeholder="Search Name" /></div>
            <div className="col s6"><input type="text" className="placeholder-white white-text" value={this.state.searchTime} onChange={this.handleTime} placeholder="Search Time" /></div>
          </div>
        </div>
        {restaurants && restaurants.filter(project => project.pick !== "true").map(project => {
          return (
            <AddFavorite project={project} key={project.id} collection={collection} />
          )
        })}
      </div>
    )
  }
}

export default RestaurantList
