import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCollection } from '../../store/actions/Actions'

class CreateCollection extends Component {
  state = {
    collection: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createCollection(this.state);
    this.props.history.push('/restaurant-frontend-gene/');
  }
  render() {
    return (
      <div className="container">
        <form className="white form-add-styles" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3 padding-bottom">Create a New Collection</h5>
          <div className="input-field">
            <input type="text" id='collection' onChange={this.handleChange} required />
            <label htmlFor="collection">Collection Title</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createCollection: (project) => dispatch(createCollection(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateCollection)
