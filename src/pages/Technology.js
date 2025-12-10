import React from 'react'
import Header from '../components/Header'
import './styles/styles.css'
import img1 from "./assets/digit.jpg"
import image2 from "./assets/po.jpg"
import image3 from "./assets/client.jpg"
import image4 from "./assets/tics.jpg"
import Card from '../components/Card'

function Technology() {
  return (
    <div>
      <Header 
        title="Reinventez avec nous" 
        content="Nous aidons les entreprises à se transformer à l'ère du numérique."
        image={img1}
        button="Parcourir nos offres"
     />

     <section className="cards">
          <div className="card-items">
            <div className="card-text">
              <h1><span>Nos</span> services</h1>
            </div>
            <div className='card-card'>
              <Card 
                backgroundImage={image4}
                title="Automatisation des processus" 
                content="Nous analysons vos processus clés pour éliminer les tâches manuelles à faible valeur ajoutée. Grâce à l’automatisation intelligente, nous réduisons les coûts opérationnels, les erreurs et les délais, tout en augmentant la productivité des équipes."
              />
              <Card 
                backgroundImage={image3}
                title="Intégration d'Outils technologiques" 
                content="Nous intégrons des solutions technologiques adaptées à vos enjeux métiers : logiciels, plateformes, outils collaboratifs et solutions sur mesure. L’objectif est de connecter vos systèmes, fiabiliser vos données et accélérer la prise de décision." 
              />
              <Card 
                backgroundImage={image2}
                title="Formation & Renforcement des capacités" 
                content="Nous accompagnons vos équipes dans la montée en compétences digitales et technologiques. Des formations pratiques, orientées résultats, pour assurer une adoption rapide des outils et un impact durable sur la performance globale." 
              />
            </div>
          </div>
        </section>
    </div>
  )
}

export default Technology
