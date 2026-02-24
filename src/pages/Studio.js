import React from 'react'
import Header from '../components/Header'
import img from "./assets/yc.jpg"
import './styles/studio.css'
import TopBar from '../components/TopBar'

function Studio() {
  return (
    <div>
      <TopBar />
      <Header 
        title="Beriverse X" 
        content="Notre Agence créative spécialisée en design et marketing numérique." 
        image={img}
        button= "Nos Services"
        headerHeight="95vh"
        overlayColor="rgba(0, 0, 0, 0.6)"
      />

      <section className='services'>
          <div className="services-content">
            <h1>Les services de Beriverse X</h1>
            <p>Notre agence offre des services complets de design et de marketing numérique pour booster votre présence en ligne.</p>
            <a href="/brochure.pdf" download>
              <button>Télécharger la brochure</button>
            </a>
          </div>
      </section>
    </div>
  )
}

export default Studio
