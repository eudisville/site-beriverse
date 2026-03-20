import React from 'react'
import {  useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header'
import './styles/styles.css'
import img1 from "./assets/team.jpg"
import image2 from "./assets/gemini.png"
import image3 from "./assets/client.jpg"
import image4 from "./assets/tics.jpg"
import im1 from "./assets/air.jpg"
import im2 from "./assets/cine.jpg"
import im3 from "./assets/woff.jpg"
import Card from '../components/Card'
import Activity from '../components/Activity'
import TopBar from '../components/TopBar'

function Technology() {
useEffect(() => {
    document.title = "Beriverse for Business";
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  return (
    <div>
      <TopBar />
      <Header 
        title="Beriverse for Business" 
        content="Nous aidons les entreprises à atteindre leurs objectifs via nos services orientés vers le B2B."
        image={img1}
        button="Parcourir nos offres"
        headerHeight="95vh"
        overlayColor="rgba(0, 0, 0, 0.6)"
        links={[
          { label: "Accueil", to: "/" },
          { label: "Nos Services", to: "#services" },
          { label: "Secteurs d'activités", to: "#sectors" },
        ]}
     />

     <section className="cards" id='services'>
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
                <h1>Notre Objectif</h1>
                <p>Permettre aux organisations de saisir les nouvelles opportunités du marché pour ainsi accroître leurs performances</p>
                {/* <a href="https://wa.me/2250566309197" target="_blank" rel="noopener noreferrer">
                  <button>Télécharger l'étude</button>
                </a> */}
              </div>

              <div className="case-content-image">
                {/* <img src="demy.jpg" alt="" /> */}
              </div>
            </div>
        </section>

        <section className="cards" id='sectors'>
          <div className="card-items">
            <div className="card-text">
              <h1><span>Nos</span> secteurs d'activités</h1>
            </div>
            <div className='activity-card'>
              <Activity backgroundImage={im1} title="Défense" content="" />
              <Activity backgroundImage={im2} title="Divertissement & Médias" content="" />
              <Activity backgroundImage={im3} title="Retail" content="" />
            </div>
          </div>
        </section>
    </div>
  )
}

export default Technology
