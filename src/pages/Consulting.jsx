import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Composants
import Header from '../components/Header';
import Card from '../components/Card';
import Activity from '../components/Activity';
import TopBar from '../components/TopBar';

// CSS
import './styles/styles.css';
import './styles/consulting.css';

// Images (Ajuste les chemins avec '../assets/' si ton fichier est dans src/pages)
import img1 from './assets/ts.jpg';

import image1 from './assets/iaa.jpg';
import image2 from './assets/daat.jpg';
import image3 from './assets/log.jpg';
import image4 from './assets/cyb.jpg';
import image5 from './assets/cxx.jpg';
import image6 from './assets/tfd.jpg';
import image7 from './assets/bpo.jpg';
import image8 from './assets/mkd.jpg';

import im1 from './assets/bk.jpg';
import im2 from './assets/in.jpg';
import im3 from './assets/r.jpg';
import im4 from './assets/cm.jpg';
import im5 from './assets/Image1.jpg';
import im6 from './assets/ps.jpg';

import client1 from './assets/bonnet.png';
import client2 from './assets/A.png';
import client3 from './assets/frr.jpg';
import client4 from './assets/axa.png';
import client5 from './assets/afb.png';
import client6 from './assets/orange.png';
import client7 from './assets/rpci.png';

// Données statiques
const SERVICES = [
  { id: 1, title: 'Intelligence Artificielle', image: image1 },
  { id: 2, title: 'Data', image: image2 },
  { id: 3, title: 'Développement Logiciels', image: image3 },
  { id: 4, title: 'Cybersécurité', image: image4 },
  { id: 5, title: 'E-commerce & CX', image: image5 },
  { id: 6, title: 'Transformation Digitale 360°', image: image6 },
  { id: 7, title: 'Externalisation de Services', image: image7 },
  { id: 8, title: 'Marketing Digital', image: image8 },
];

const PROJECTS = [
  { id: 1, title: 'Banque', image: im1 },
  { id: 2, title: 'Assurance', image: im2 },
  { id: 3, title: 'Commerce', image: im3 },
  { id: 4, title: 'Médias', image: im4 },
  { id: 5, title: 'Télécommunications', image: im5 },
  { id: 6, title: 'Services Publics', image: im6 },
];

const CLIENTS = [
  { id: 1, src: client1, alt: 'Client Bonnet' },
  { id: 2, src: client2, alt: 'Client A' },
  { id: 3, src: client3, alt: 'Client FRR' },
  { id: 4, src: client4, alt: 'Client AXA' },
  { id: 5, src: client5, alt: 'Client AFB' },
  { id: 6, src: client6, alt: 'Client Orange' },
  { id: 7, src: client7, alt: 'Client RPCI' },
];

function Consulting() {
  useEffect(() => {
    document.title = 'Beriverse : Consulting';
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
          { label: 'Accueil', to: '/' },
          { label: 'Nos Services', to: '#services' },
          { label: 'Projets', to: '#sectors' },
        ]}
      />

      {/* Services Section */}
      <section className="cards" id="services">
        <div className="card-items">
          <div className="card-text">
            <h1><span>Nos</span> Services</h1>
          </div>
          <div className="card-card">
            {SERVICES.map((service) => (
              <Card
                key={service.id}
                backgroundImage={service.image}
                title={service.title}
                content=""
              />
            ))}
          </div>
        </div>
      </section>

      {/* Chiffres Section */}
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

      {/* Projets Section */}
      <section className="cards" id="sectors">
        <div className="card-items">
          <div className="card-text">
            <h1><span>Projets</span> Réalisés</h1>
          </div>
          <div className="activity-card">
            {PROJECTS.map((project) => (
              <Activity
                key={project.id}
                backgroundImage={project.image}
                title={project.title}
                content=""
              />
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="manage" id="clients">
        <div className="manage-text">
          <h1>Ils nous font confiance</h1>
        </div>
        <div className="manage-items">
          {CLIENTS.map((client) => (
            <img key={client.id} src={client.src} alt={client.alt} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="case">
        <div className="case-content">
          <div className="case-content-text">
            <h1>Nous faire confiance</h1>
            <p>
              Nous disposons de consultants de premier ordre dans leurs domaines prêts à mettre leurs expertises au service de votre entreprise.
            </p>
            <a href="https://wa.me/2250566309197" target="_blank" rel="noopener noreferrer">
              <button>Prendre Rendez-Vous</button>
            </a>
          </div>
          <div className="case-content-image" />
        </div>
      </section>
    </div>
  );
}

export default Consulting;