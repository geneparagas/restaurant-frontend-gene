import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateCollection } from '../../store/actions/Actions'

class EditCollection extends Component {
	state = {
		collectId: this.props.collection
	}

	toggle() {
		this.setState({
			shown: !this.state.shown
		});
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.updateCollection(this.state);
		this.state.shown = false
	}

	render() {
		var shown = {
			display: this.state.shown ? "block" : "none"
		};

		return (
		<div>
				<div className="col left margin-left-10">
					<div className="btn-floating btn-small waves-effect waves-light cyan pulse" onClick={this.toggle.bind(this)}>
						<i className="material-icons">edit</i>
					</div>
				</div>
				<div className="col s6">
					<div style={shown}>
						<form className="white" onSubmit={this.handleSubmit}>
							<div className="row remove-margin">
								<div className="input-field remove-margin col">
									<input type="text" id='collection' onChange={this.handleChange} />
								</div>
								<div className="input-field remove-margin col">
									<button className="btn blue lighten-1">Update</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateCollection: (project) => dispatch(updateCollection(project))
	}
}


export default connect(null, mapDispatchToProps)(EditCollection)