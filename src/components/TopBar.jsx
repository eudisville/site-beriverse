import React from 'react'
import './styles/topbar.css'

function TopBar({

  bgColor = "#ffffff",
  fontColor = "rgb(0, 0, 0)",
  borBottom = "1px solid #e8e7e7"

}) {
  return (
    <div style={{ background: bgColor, borderBottom: borBottom }} className='topbar'>
        <div className="top-left" style={{ color: fontColor }} >
            Beriverse Incorporation
        </div>
      <div style={{ color: fontColor }} className="top-right">CI | FR</div>
    </div>
  )
}

export default TopBar
