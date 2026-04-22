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
import im1 from "./assets/b2B.jpg"
import im2 from "./assets/Image1.jpg"
import im3 from "./assets/corporation.jpg"
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
        content="Nous vous fournissons des consultants ingénieurs hautement qualifiés pour renforcer les équipes de ses clients sur des projets d'innovation technologique."

        image={img1}
        button="Parcourir nos offres"
        headerHeight="95vh"
        overlayColor="rgba(0, 0, 0, 0.6)"
        links={[
          { label: "Accueil", to: "/" },
          { label: "Nos Expertises", to: "#services" },
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
                title="Ingénierie Logiciels & Cloud" 
                content="Développeurs, Architectes Logiciels, DevOps... "
              />
              <Card 
                backgroundImage={image3}
                title="Administration Réseaux" 
                content="Administrateurs Systèmes, Ingénieurs Réseaux..."
              />
              <Card
                backgroundImage={image2}
                title="Support Technique"
                content="Techniciens Support IT..."  
              />
            </div>
          </div>
        </section>

        <section className='case'>
            <div className="case-content">
              <div className="case-content-text">
                <h1>Nous faire confiance</h1>
                <p>Nous disposons de consultants de premier ordre dans leurs domaines prets à mettre leurs expertises au service de votre entreprise</p>
                <a href="https://wa.me/2250566309197" target="_blank" rel="noopener noreferrer">
                  <button>Prendre Rendez-Vous</button>
                </a>
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
              <Activity backgroundImage={im1} title="Services Financiers" content="" />
              <Activity backgroundImage={im2} title="Télécoms" content="" />
              <Activity backgroundImage={im3} title="Cabinet Technologique" content="" />
            </div>
          </div>
        </section>

    </div>
  )
}

export default Technology
