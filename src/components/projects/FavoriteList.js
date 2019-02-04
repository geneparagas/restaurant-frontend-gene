import React from 'react'
import FavoriteSummary from './FavoriteSummary'

const FavoriteList = ({ favorites, restaurants }) => {
  return (
    <div className="project-list section">
      {
        favorites && favorites.map(project => {
        return (
            <FavoriteSummary project={project} key={project.id} restaurants={restaurants} />
        )
      })}
    </div>
  )
}

export default FavoriteList
