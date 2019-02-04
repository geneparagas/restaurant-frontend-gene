import React from 'react'

const ProjectSummary = ({project}) => {
  return (
    <div className="card z-depth-1 project-summary">
      <div className="card-content grey-text text-darken-3">
        <h6>{project.restaurant}</h6>
        <p className="grey-text">{project.time}</p>
      </div>
    </div>
  )
}

export default ProjectSummary
