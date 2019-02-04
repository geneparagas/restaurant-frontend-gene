import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class SendEmailForm extends Component {
	constructor(props) {
		super()
		this.state = {
			email: '',
			collection: props.collectionName,
			message:'',
			link: props.userid,
			redirect: false
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	async handleSubmit(e) {
		e.preventDefault();
		this.setState({
      redirect: true
    })
		const { email, collection, message, link } = this.state

		await axios.post('/api/form', {
			email,
			collection,
			message,
			link
		})
	}

	renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={'/restaurant-frontend-gene/project/' + this.props.userid} />
    }
  }

	render() {
		return (
			<div className="container">
			{this.renderRedirect()}
				<form className="white form-add-styles" onSubmit={this.handleSubmit}>
					<h5 className="grey-text text-darken-3 padding-bottom">Share to a Friend</h5>
					<div className="input-field">
						<input type="email" id='email' onChange={this.handleChange} required />
						<label htmlFor="email">Email</label>
					</div>
					<div className="input-field">
          <textarea id="message" className="materialize-textarea" onChange={this.handleChange}/> 
          <label htmlFor="email">Message</label>
        </div>
					<div className="project-list section">
					</div>
					<div className="input-field">
						<button className="btn pink lighten-1">Submit</button>
					</div>
				</form>
			</div>
		)
	}
}


export default SendEmailForm
