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
        title="Reinventez vos processus avec nous" 
        content="Nous aidons les entreprises à accélérer leurs transformations digitales afin de développer
        de nouveaux modèles économiques et gagner en productivité."
        image={img1}
        button="Parcourir nos offres"
     />

     <section className="cards">
          <div className="card-items">
            <div className="card-text">
              <h1><span>Cas</span> clients <span>et</span> Guides</h1>
            </div>
            <div className='card-card'>
              <Card 
                backgroundImage={image4}
                title="La transformation digitale dans le secteur de l'assurance" 
                content="Explorer comment nous avons aidé cette entreprise dans sa digitalisation."
              />
              <Card 
                backgroundImage={image3}
                title="L'expérience client 2.0 un levier de votre réussite" 
                content="Consultez nos conseils pour améliorer le parcours de vos clients." 
              />
              <Card 
                backgroundImage={image2}
                title="L'impact des données dans la prise de décision" 
                content="Découvrez comment les données peuvent transformer votre entreprise." 
              />
            </div>
          </div>
        </section>
    </div>
  )
}

export default Technology
