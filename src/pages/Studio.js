import React from 'react'
import Header from '../components/Header'
import img from "./assets/pr.jpg"
import './styles/studio.css'

function Studio() {
  return (
    <div>
      <Header 
        title="Beriverse Studio, au service de la créativité" 
        content="Beriverse Studio est la branche créative de Beriverse qui pour but d'améliorer l'esthétique
        de vos projets" 
        image={img}
        button= "Nos Services"
      />

      <section className='services'>
          <div className="services-content">
            <h1>Nos services Studio</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos minima iusto voluptates, maxime quam facilis eum voluptatibus dolorum rem labore cupiditate odio sit.</p>
            <button>Télécharger la brochure</button>
          </div>
      </section>
    </div>
  )
}

export default Studio
