import React from 'react'
import './styles/topcard.css'

function TopCard({ title, subtitle, text }) {
  return (
    <div className='top-card'>
        <div className="carre"></div>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{text}</p>
    </div>
  )
}

export default TopCard
