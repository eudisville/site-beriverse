import React from 'react'
import Header from '../components/Header'
import img from "./assets/pr.jpg"
import './styles/studio.css'

function Studio() {
  return (
    <div>
      <Header 
        title="Block Studio, au service de la créativité" 
        content="Block Studio est la branche créative de Beriverse axée sur le design." 
        image={img}
        button= "Nos Services"
      />

      <section className='services'>
          <div className="services-content">
            <h1>Nos services Studio</h1>
            <p>Block Studio fournit des services créatifs à forte valeur ajoutée contribuant à améliorer l'image de vos projets.</p>
            <a href="/brochure.pdf" download>
              <button>Télécharger la brochure</button>
            </a>
          </div>
      </section>
    </div>
  )
}

export default Studio
