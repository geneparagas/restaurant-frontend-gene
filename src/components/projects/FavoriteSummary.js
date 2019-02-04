import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeFav } from '../../store/actions/Actions'

class FavoriteSummary extends Component {
  state = {
    restaurantid: this.props.project.id,
    collectId: this.props.project.collectId,
    updateId: this.props.project.restaurantid,
    pick: "false"
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.removeFav(this.state);
  }
  render() {
    return (
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <div className="row remove-margin-bottom">
            <div className="col s10">
              <span className="card-title ">{this.props.project.restaurant}</span>
              <p className="grey-text">{this.props.project.time}</p>
            </div>
            <div className="col s2 remove-padding">
              <button className="btn pink lighten-1 right" onClick={this.handleSubmit}>remove</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFav: (project) => dispatch(removeFav(project))
  }
}

export default connect(null, mapDispatchToProps)(FavoriteSummary)
