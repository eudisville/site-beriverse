import React from 'react'
import Header from '../components/Header'
import img1 from './assets/GenZ1.jpg'
import Activity from '../components/Activity'
import image1 from "./assets/imz3.jpg"
import image2 from "./assets/imz1.jpg"
import image3 from "./assets/imz2.jpg"
import './styles/academy.css'
import { Link } from 'react-router-dom'

function Academy() {
  return (
    <div>
      <Header 
        title="Bienvenue à Beriverse Academy" 
        content="Démocratiser l'éducation technologique en Afrique."
        image={img1}
        button="Parcourir"
        />

        <section className="activities">
          <div className="activity-items">
            <div className="activity-text">
              <h1><span>Nos</span> Formations</h1>
              <p>Suivez des formations certifiantes en IA, Data, Marketing Digital et Design au format hybride adaptées aux besoins du marché.</p>
            </div>
            <div className='activity-card'>
              <Activity backgroundImage={image1} title="IA Générative" content="Maîtrisez l’IA générative et transformez vos idées en créations innovantes." />
              <Activity backgroundImage={image2} title="Formation Python" content="Apprenez Python et ouvrez la porte à des carrières en développement et data science." />
              <Activity backgroundImage={image3} title="Marketing Digital" content="Maîtrisez les stratégies numériques qui transforment les prospects en clients." />
            </div>
          </div>
        </section>

        <section className='program'>
            <div className="program-content">
              <div className="program-content-text">
                <h1>Programmes Beriverse Academy</h1>
                <p>Téléchargez la brochure pour découvrir nos programmes</p>
                <a href="https://wa.me/2250566309197" target="_blank" rel="noopener noreferrer">
                  <button>Télécharger la brochure</button>
                </a>
              </div>

              <div className="program-content-image">
                <img src="demy.jpg" alt="" />
              </div>
            </div>
        </section>

        <section className='cta'>
            <div className="cta-content">
                <h1>Devenez un Game Changer</h1>
                <p>Vous souhaitez suivre l'actualité de Beriverse Academy ? Notre communauté est ouverte.</p>
                <Link to="https://chat.whatsapp.com/FYSCTOI5kJIKI64OnJ7VgG" target='_blank'><button>Intégrer la Communauté</button></Link>
            </div>
        </section>
    </div>
  )
}

export default Academy
