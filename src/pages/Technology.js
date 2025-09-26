import React from 'react'
import Header from '../components/Header'
import './styles/styles.css'
import img1 from "./assets/digit.jpg"
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
                backgroundImage="" 
                title="La transformation digitale dans le secteur de l'assurance" 
                content="Explorer comment nous avons aidé cette entreprise dans sa digitalisation."
              />
              <Card 
                backgroundImage="" 
                title="L'expérience client 2.0 un levier de votre réussite" 
                content="Consultez nos conseils pour améliorer le parcours de vos clients." 
              />
              <Card 
                backgroundImage=""
                title="Notre engagement dans le développement durable" 
                content="Beriverse, une culture de la RSE impeccable" 
              />
            </div>
          </div>
        </section>
    </div>
  )
}

export default Technology
