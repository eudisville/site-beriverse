import React from 'react'
import Header from '../components/Header'
import './styles/styles.css'
import img1 from "./assets/team.jpg"
import image2 from "./assets/gemini.png"
import image3 from "./assets/client.jpg"
import image4 from "./assets/tics.jpg"
import im1 from "./assets/exp.jpg"
import im2 from "./assets/smart.jpg"
import im3 from "./assets/woff.jpg"
import Card from '../components/Card'
import Activity from '../components/Activity'
import TopBar from '../components/TopBar'

function Technology() {
  return (
    <div>
      <TopBar />
      <Header 
        title="Beriverse for Business" 
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
                content="Exploitez la puissance de vos données grâce à nos solutions d'intelligence artificielle et d'analyse avancée."
              />
              <Card 
                backgroundImage={image3}
                title="Expérience client" 
                content="Nous concevons des expériences client innovantes et personnalisées pour fidéliser vos clients et stimuler la croissance de votre entreprise."
              />
              <Card
                backgroundImage={image2}
                title="Automatisation"
                content="Nos solutions d'automatisation permettent de réduire les tâches répétitives et d'améliorer l'efficacité opérationnelle."  
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

        <section className="cards">
          <div className="card-items">
            <div className="card-text">
              <h1><span>Nos</span> secteurs d'activités</h1>
            </div>
            <div className='activity-card'>
              <Activity backgroundImage={im1} title="Assurance" content="" />
              <Activity backgroundImage={im2} title="Services publique" content="" />
              <Activity backgroundImage={im3} title="Biens et services de consommation" content="" />
            </div>
          </div>
        </section>
    </div>
  )
}

export default Technology
