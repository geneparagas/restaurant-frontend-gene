import React from 'react'

const CollectionSummary = ({project}) => {
  return (
    <div className="card z-depth-1 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title remove-margin-bottom">{project.collection}</span>
      </div>
    </div>
  )
}

export default CollectionSummary
