import React from 'react'
import {  useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header'
import './styles/styles.css'
import './styles/consulting.css'
import img1 from "./assets/ts.jpg"
import image1 from "./assets/iaa.jpg"
import image2 from "./assets/daat.jpg"
import image3 from "./assets/log.jpg"
import image4 from "./assets/cyb.jpg"
import image5 from "./assets/cxx.jpg"
import image6 from "./assets/tfd.jpg"
import image7 from "./assets/bpo.jpg"
import image8 from "./assets/mkd.jpg"
import im1 from "./assets/bk.jpg"
import im2 from "./assets/in.jpg"
import im3 from "./assets/r.jpg"
import im4 from "./assets/cm.jpg"
import im5 from "./assets/Image1.jpg"
import im6 from "./assets/ps.jpg"
import client1 from "./assets/bonnet.png"
import client2 from "./assets/A.png"
import client3 from "./assets/frr.jpg"
import client4 from "./assets/axa.png"
import client5 from "./assets/afb.png"
import client6 from "./assets/orange.png"
import client7 from "./assets/rpci.png"
import Card from '../components/Card'
import Activity from '../components/Activity'
import TopBar from '../components/TopBar'

function Consulting() {
useEffect(() => {
    document.title = "Beriverse : Consulting";
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  return (
    <div>
      <TopBar />
      <Header 
        title="Tech Studio"
        content="De la conception à la mise en œuvre, nous vous accompagnons dans votre transformation digitale."

        image={img1}
        button="Visiter le Portfolio"
        headerHeight="95vh"
        overlayColor="rgba(0, 0, 0, 0.6)"
        links={[
          { label: "Accueil", to: "/" },
          { label: "Nos Services", to: "#services" },
          { label: "Projets", to: "#sectors" },
        ]}
     />

     <section className="cards" id='services'>
          <div className="card-items">
            <div className="card-text">
              <h1><span>Nos</span> Services</h1>
            </div>
            <div className='card-card'>
              <Card 
                backgroundImage={image1}
                title="Intelligence Artificielle" 
                content= ""
              />
              <Card 
                backgroundImage={image2}
                title="Data" 
                content=""
              />
              <Card
                backgroundImage={image3}
                title="Développement Logiciels"
                content=""  
              />
              <Card
                backgroundImage={image4}
                title="Cybersécurité"
                content=""  
              />
              <Card
                backgroundImage={image5}
                title="E-commerce & CX"
                content=""  
              />
              <Card
                backgroundImage={image6}
                title="Transformation Digitale 360°"
                content=""  
              />
              <Card
                backgroundImage={image7}
                title="Externalisation de Services"
                content=""  
              />
              <Card
                backgroundImage={image8}
                title="Marketing Digital"
                content=""  
              />

            </div>
          </div>
        </section>

        <section className="digits">
          <h2>Nos Chiffres</h2>

          <div className="digit">
            <div className="digit-content">
              <h1>70+</h1>
              <h4>Projets Réalisés</h4>
            </div>

            <div className="digit-content">
              <h1>3</h1>
              <h4>Ans sur le marché</h4>
            </div>

            <div className="digit-content">
              <h1>20+</h1>
              <h4>Ingénieurs & Créatifs</h4>
            </div>
          </div>
        </section>

        <section className="cards" id='sectors'>
          <div className="card-items">
            <div className="card-text">
              <h1><span>Projets</span> Réalisés</h1>
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

        <section className="manage" id='sectors'>
          <div className="manage-text">
            <h1>Ils nous font confiance</h1>
          </div>

          <div className="manage-items">
            <img src={client1} alt="Client 1" />
            <img src={client2} alt="Client 2" />
            <img src={client3} alt="Client 3" />
            <img src={client4} alt="Client 4" />
            <img src={client5} alt="Client 5" />
            <img src={client6} alt="Client 6" />
            <img src={client7} alt="Client 7" />
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

export default Consulting;