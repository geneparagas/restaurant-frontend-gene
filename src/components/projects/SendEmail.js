import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import SendEmailForm from './Form'

const SendEmail = (props) => {
  const { project } = props;
  const id = props.match.params.userid;
  if (project) {
    return (
      <SendEmailForm collectionName={project.collection} userid={id} />
    )
  } else {
    return (
      <div className="container center">
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.userid;
  const projects = state.firestore.data.collections;
  const project = projects ? projects[id] : null
  return {
    project: project,
    favorites: state.firestore.ordered.favorite,
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    { collection: 'collections' },
    {
      collection: 'collections',
      doc: props.match.params.userid,
      subcollections: [
        {
          collection: 'favorite',
        },
      ],
      storeAs: 'favorite'
    }
  ])
)(SendEmail)