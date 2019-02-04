import React, { Component } from 'react'
import ProjectSummary from './ProjectSummary'

class ProjectList extends Component {
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
        return i.restaurant.toLowerCase().match(searchString),
          i.time.toLowerCase().match(searchString);
      });
    }
    var searchTime = this.state.searchTime.trim().toLowerCase();
    if (searchTime.length > 0) {
      restaurants = restaurants.filter(function (i) {
        return i.time.toLowerCase().match(searchTime)
      });
    }
    return (
      <div className="project-list">
        <div className="input-field">
        <div className="white-text"><h4 className="remove-margin-bottom red-text lighten-1">Restaurants</h4></div>
        <div className="input-field">
          <div className="row">
            <div className="col s6"><input type="text" className="white-text placeholder-white" value={this.state.searchString} onChange={this.handleChange} placeholder="Search Name" /></div>
            <div className="col s6"><input type="text" className="white-text placeholder-white" value={this.state.searchTime} onChange={this.handleTime} placeholder="Search Time" /></div>
          </div>
        </div>
        </div>
        {restaurants && restaurants.map(project => {
          return (
            <ProjectSummary project={project} key={project.id} />
          )
        })}
      </div>
    )
  }
}

export default ProjectList
