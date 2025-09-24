import React from 'react'
import Header from '../components/Header'
import img1 from './assets/BA.jpg'
import Activity from '../components/Activity'
import image1 from "./assets/hand.jpg"
import image2 from "./assets/365.jpg"
import image3 from "./assets/adobe.jpg"
import './styles/academy.css'

function Academy() {
  return (
    <div>
      <Header 
        title="Bienvenue à Beriverse Academy" 
        content="Beriverse Academy est la division technologique 
        de Beriverse fournissant des formations des les domaines du numérique.
        La mission de cette division, démocratiser l'éducation technologique."
        image={img1}
        button="Parcourir"
        />

        <section className="activities">
          <div className="activity-items">
            <div className="activity-text">
              <h1><span>Nos</span> Formations</h1>
            </div>
            <div className='activity-card'>
              <Activity backgroundImage={image1} title="Big Data & Intelligence Artificielle" content="" />
              <Activity backgroundImage={image2} title="Base Informatique & Outils Bureautiques" content="" />
              <Activity backgroundImage={image3} title="Design & Motion Design" content="" />
            </div>
          </div>
        </section>

        <section className='program'>
            <div className="program-content">
                <h1>Digital Career Program</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos minima iusto voluptates, maxime quam facilis eum voluptatibus dolorum rem labore cupiditate odio sit.</p>
                <button>Télécharger la brochure</button>
            </div>
        </section>

        <section className='cta'>
            <div className="cta-content">
                <h1>Devenez un Game Changer</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos minima iusto voluptates, maxime quam facilis eum voluptatibus dolorum rem labore cupiditate odio sit.</p>
                <button>Nous contacter</button>
            </div>
        </section>
    </div>
  )
}

export default Academy
