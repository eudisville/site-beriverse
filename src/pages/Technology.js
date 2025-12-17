import React from 'react'
import Header from '../components/Header'
import './styles/styles.css'
import img1 from "./assets/digit.jpg"
import image2 from "./assets/gemini.png"
import image3 from "./assets/client.jpg"
import image4 from "./assets/tics.jpg"
import image5 from "./assets/exp.png"
import image6 from "./assets/smart.jpg"
import image7 from "./assets/woff.jpg"
import Card from '../components/Card'

function Technology() {
  return (
    <div>
      <Header 
        title="Devenez plus performants grâce au numérique" 
        content="Nous aidons les entreprises à se transformer à l'ère du numérique."
        image={img1}
        button="Parcourir nos offres"
     />

     <section className="cards">
          <div className="card-items">
            <div className="card-text">
              <h1><span>Nos</span> Expertises</h1>
            </div>
            <div className='card-card'>
              <Card 
                backgroundImage={image4}
                title="Data & IA" 
              />
              <Card 
                backgroundImage={image3}
                title="Expérience client" 
              />
              <Card 
                backgroundImage={image2}
                title="Automatisation"  
              />
              <Card 
                backgroundImage={image6}
                title="Transformation digitale" 
              />
              <Card 
                backgroundImage={image5}
                title="Développement de logiciels" 
              />
              <Card 
                backgroundImage={image7}
                title="Formation & Renforcement des capacités"  
              />
            </div>
          </div>
        </section>

        <section className='case'>
            <div className="case-content">
              <div className="case-content-text">
                <h1>L'IA, levier de performance des des entreprises aujourd'hui</h1>
                <p>Découvrez comme l'IA peut être un game changer pour les organisations dans cette ère de forte concurrence.</p>
                <a href="https://wa.me/2250566309197" target="_blank" rel="noopener noreferrer">
                  <button>Télécharger l'étude</button>
                </a>
              </div>

              <div className="case-content-image">
                {/* <img src="demy.jpg" alt="" /> */}
              </div>
            </div>
        </section>
    </div>
  )
}

export default Technology
