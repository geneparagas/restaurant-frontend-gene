import React from 'react'
import CollectionSummary from './CollectionSummary'
import { Link } from 'react-router-dom'

const CollectionList = ({ collections }) => {
  return (
    <div className="project-list section">
      {collections && collections.map(project => {
        return (
          <Link to={"/restaurant-frontend-gene/project/" + project.id} key={project.id}>
              <CollectionSummary project={project} key={project.id} />
            </Link>
        )
      })}
    </div>
  )
}

export default CollectionList
