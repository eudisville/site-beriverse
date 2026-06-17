import React from 'react'
import './styles/topbar.css'

function TopBar({

  bgColor = "#fff",
  fontColor = "#000",
  borBottom = "1px solid #ccc"

}) {
  return (
    <div style={{ background: bgColor, borderBottom: borBottom }} className='topbar'>
        <div className="top-left" style={{ color: fontColor }} >
            Beriverse Incorporation
        </div>
      <div style={{ color: fontColor }} className="top-right">Global</div>
    </div>
  )
}

export default TopBar
