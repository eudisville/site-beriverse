import React from 'react'
import './styles/courses.css'

function Courses({ image, title, format, content }) {
  return (
    <div className="course-card">
      <div className="course-image">
        <img src={image} alt="" />
      </div>

      <div className="course-infos">
        <h5>{format}</h5>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Courses
