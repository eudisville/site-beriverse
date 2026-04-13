import React from 'react'
import Header from '../components/Header'
import img from "./assets/impact.jpg"
import './styles/studio.css'
import TopBar from '../components/TopBar'

function Impact() {
  return (
    <div>
      <TopBar />
      <Header 
        title="Notre Impact" 
        content="Explorer comment nous sommes engagés auprès de notre société." 
        image={img}
        button= "Nos Services"
        headerHeight="95vh"
        overlayColor="rgba(0, 0, 0, 0.6)"
      />

      <section className='services'>
          <div className="services-content">
            <h1>Nos Programmes</h1>
            <p></p>
            <a href="/brochure.pdf" download>
              <button>Télécharger la brochure</button>
            </a>
          </div>
      </section>
    </div>
  )
}

export default Impact
