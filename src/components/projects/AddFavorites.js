import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addFav } from '../../store/actions/Actions'

class AddFavorite extends Component {
  state = {
    restaurant: this.props.project.restaurant,
    time: this.props.project.time,
    collectId: this.props.collection,
    restaurantid: this.props.project.id,
    updateId: this.props.collection,
    pick:"true"
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.addFav(this.state);
  }
  render() {
    return (
      <div className="card z-depth-1 project-summary">
        <div className="card-content grey-text text-darken-3">
          <div className="row remove-margin-bottom">
            <div className="col s10">
              <span className="card-title ">{this.props.project.restaurant}</span>
              <p className="grey-text">{this.props.project.time}</p>
            </div>
            <div className="col s2">
              <button className="btn waves-effect waves-light right" onClick={this.handleSubmit}>Add</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFav: (project) => dispatch(addFav(project))
  }
}

export default connect(null, mapDispatchToProps)(AddFavorite)
