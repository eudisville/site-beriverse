import React from 'react'
import {  useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header'
import './styles/styles.css'
import img1 from "./assets/Jan.png"
import image1 from "./assets/soft.jpg"
import image2 from "./assets/ia.jpg"
import image3 from "./assets/sec.jpg"
import image4 from "./assets/cloud.jpg"
import image5 from "./assets/sys.jpg"
import image6 from "./assets/td.jpg"
import image7 from "./assets/eco.jpg"
import image8 from "./assets/client.jpg"
import im1 from "./assets/bk.jpg"
import im2 from "./assets/in.jpg"
import im3 from "./assets/r.jpg"
import im4 from "./assets/cm.jpg"
import im5 from "./assets/Image1.jpg"
import im6 from "./assets/ps.jpg"
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
        title="Entreprises"
        content="Nous contribuons activement à la transformation digitale et au développement des compétences des entreprises pour une meilleure performance."

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
                backgroundImage={image1}
                title="Logiciels & Applications" 
                content= ""
              />
              <Card 
                backgroundImage={image2}
                title="Intelligence Artificielle & Big Data" 
                content=""
              />
              <Card
                backgroundImage={image3}
                title="Cybersécurité"
                content=""  
              />
              <Card
                backgroundImage={image4}
                title="Cloud"
                content=""  
              />
              <Card
                backgroundImage={image5}
                title="Systèmes & Réseaux"
                content=""  
              />
              <Card
                backgroundImage={image6}
                title="Transformation Digitale"
                content=""  
              />
              <Card
                backgroundImage={image7}
                title="E-Commerce"
                content=""  
              />
              <Card
                backgroundImage={image8}
                title="Expérience Client"
                content=""  
              />

            </div>
          </div>
        </section>

        <section className="digits">
          <h2>Chiffres Clés 2025</h2>

          <div className="digit">
            <div className="digit-content">
              <h1>20+</h1>
              <h4>Projets Réalisés</h4>
            </div>

            <div className="digit-content">
              <h1>5+</h1>
              <h4>Organisations Formées</h4>
            </div>

            <div className="digit-content">
              <h1>2</h1>
              <h4>Logiciels Propriétaires</h4>
            </div>
          </div>
        </section>

        <section className="cards" id='sectors'>
          <div className="card-items">
            <div className="card-text">
              <h1><span>Nos</span> secteurs d'activités</h1>
            </div>
            <div className='activity-card'>
              <Activity backgroundImage={im1} title="Banque" content="" />
              <Activity backgroundImage={im2} title="Assurance" content="" />
              <Activity backgroundImage={im3} title="Commerce" content="" />
              <Activity backgroundImage={im4} title="Médias" content="" />
              <Activity backgroundImage={im5} title="Télécommunications" content="" />
              <Activity backgroundImage={im6} title="Services Publiques" content="" />
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

    </div>
  )
}

export default Technology
