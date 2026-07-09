import React from 'react'
// import { useEffect } from 'react'
import Header from '../components/Header'
import AcademyLogo from './assets/BA Logo 2.png'
import AcademyImage from './assets/dcp.jpg'
import Activity from '../components/Activity'
import image1 from "./assets/imz3.jpg"
import image2 from "./assets/branding.jpg"
import image3 from "./assets/imz2.jpg"
import './styles/academy.css'
import { Link } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Courses from '../components/Courses'
import gen from "./assets/gen.jpg"
import branm from "./assets/branm.jpg"
import canva from "./assets/canva.jpg"
import bp from "./assets/bp.jpg"

function Academy() {
  // useEffect(() => {
  //   document.title = "Beriverse Academy";
  //   const favicon = document.querySelector("link[rel='icon']");
  //   favicon.href = "ba-favicon.png";
  // }, []);

  return (
    <div>
      <TopBar />
      <Header
        title="Particuliers"
        content="Engagés envers le grand public, nous offrons des formations de qualités ainsi que des services digitaux."
        image={AcademyImage}
        // logo={AcademyLogo}
        links={[
          { label: "Accueil", to: "/" },
          { label: "Formations", to: "#formations" },
          { label: "Services Digitaux", to: "#programmes" },
        ]}
        navBgColor="#ffffff"
        navHeight = "80px"
        headerHeight="95vh"
        overlayColor="rgba(0, 0, 0, 0.6)"
      />

        <section className="activities">
          <div className="activity-items">
            <div className="activity-text">
              <h1><span>Nos Domaines </span>de Formations</h1>
              <p>Nous formons dans des domaines de plus en plus demandés sur le marchés.</p>
            </div>
            <div className='activity-card'>
              <Activity backgroundImage={image1} title="Technologie" content="Formez-vous aux dernières tendances technologiques pour rester à la pointe de l'innovation." />
              <Activity backgroundImage={image2} title="Branding" content="Apprenez à créer une identité visuelle forte et cohérente pour votre marque." />
              <Activity backgroundImage={image3} title="Business" content="Maîtrisez les compétences essentielles pour diriger et développer votre entreprise." />
            </div>
          </div>
        </section>

        <section className="digits">
          <h2>Nos Chiffres Clés</h2>

          <div className="digit">
            <div className="digit-content">
              <h1>300+</h1>
              <h4>Alumnis</h4>
            </div>

            <div className="digit-content">
              <h1>90+</h1>
              <h4>Certificats Remis</h4>
            </div>

            <div className="digit-content">
              <h1>5+</h1>
              <h4>Sollicitations</h4>
            </div>
          </div>
        </section>

        <section className="courses" id='formations'>
          <div className="courses-items">
            <div className="courses-text">
              <h1><span>Nos </span>Formations</h1>
              <p>Faites la rencontre avec nos formations sous divers formats : parcours certifiants, masterclass, bootcamp, etc.</p>
            </div>
            <div className='courses-card'>
              <Courses image={gen} title="Generative AI" format="Bootcamp" content="Découvrez comment exploiter l’intelligence artificielle pour créer du contenu, automatiser vos tâches et booster votre créativité. Apprenez à utiliser les outils les plus puissants du moment pour transformer vos idées en projets concrets." button="Voir la brochure" />
              <Courses image={branm} title="Brand Management" format="Masterclass" content="Apprenez à construire, développer et positionner une marque forte. Comprenez les stratégies marketing, l’identité visuelle et l’expérience client pour créer un impact durable sur votre audience." button="Voir la brochure" />
              <Courses image={canva} title="Design Graphique avec Canva" format="Bootcamp" content="Maîtrisez Canva pour concevoir des visuels professionnels en un rien de temps. Des publications réseaux sociaux aux présentations, donnez vie à vos idées sans compétences techniques avancées." button="Voir la brochure" />
              <Courses image={bp} title="Business Playbook" format="Masterclass" content="Découvrez les stratégies concrètes pour lancer, gérer et développer votre entreprise. Du business model à la croissance, apprenez les clés pour réussir dans le monde entrepreneurial." button="Voir la brochure" />
            </div>
          </div>
        </section >

        <section className='program' id='programmes'>
            <div className="program-content">
              <div className="program-content-text">
                <h1>Programmes Beriverse Academy</h1>
                <p>A Beriverse Academy, nous croyons que la formation peut transformer non seulement les individus, mais aussi la société. Nos programmes à caractère RSE sont conçus pour allier savoir-faire professionnel et impact positif. Ils vous permettent d’acquérir des compétences clés tout en contribuant à des initiatives responsables : inclusion, durabilité, 
                  innovation sociale et éthique des affaires. Ensemble, formons des leaders conscients et engagés pour un futur durable.</p>
                <a href="https://wa.me/2250566309197" target="_blank" rel="noopener noreferrer">
                  <button>Télécharger la brochure</button>
                </a>
              </div>

              <div className="program-content-image">
                <img src="demy.jpg" alt="" />
              </div>
            </div>
        </section>

        <section className='cta'>
            <div className="cta-content">
                <h1>Devenez un Game Changer</h1>
                <p>Vous souhaitez suivre l'actualité de Beriverse Academy ? Notre communauté est ouverte.</p>
                <Link to="https://chat.whatsapp.com/FYSCTOI5kJIKI64OnJ7VgG" target='_blank'><button>Intégrer la Communauté</button></Link>
            </div>
        </section>
    </div>
  )
}

export default Academy
