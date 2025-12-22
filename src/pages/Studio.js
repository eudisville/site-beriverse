import React from 'react'
import Header from '../components/Header'
import img from "./assets/pr.jpg"
import './styles/studio.css'

function Studio() {
  return (
    <div>
      <Header 
        title="Beriverse X" 
        content="Notre Agence créative spécialisée en design et marketing numérique." 
        image={img}
        button= "Nos Services"
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
