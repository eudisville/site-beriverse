import React from 'react'
import { useEffect } from 'react'
import Header from '../components/Header'
// import AcademyLogo from './assets/BA Logo 2.png'
import AcademyImage from './assets/dcp.jpg'
import Activity from '../components/Activity'
import image1 from "./assets/imz3.jpg"
import image2 from "./assets/branding.jpg"
import image3 from "./assets/imz2.jpg"
import './styles/academy.css'
import { Link } from 'react-router-dom'
// import TopBar from '../components/TopBar'
import Courses from '../components/Courses'
import AI from "./assets/IAA.jpg"
import CYBER from "./assets/CY.jpg"
import DATA from "./assets/DA.jpg"
import EX from "./assets/EX.jpg"
import PY from "./assets/PY.jpg"
import DM from "./assets/ME.jpg"
import DG from "./assets/DG.jpg"
import PM from "./assets/PM.jpg"

function Academy() {
  useEffect(() => {
    document.title = "Beriverse : Formez-vous aux compétences de demain";
  }, []);

  return (
    <div className='academy'>
      {/* <TopBar /> */}
      <Header
        title="Construisez votre avenir grâce au digitales"
        content="Engagés envers le grand public, nous offrons des formations de qualités."
        image={AcademyImage}
        // logo={AcademyLogo}
        button="En savoir plus"
        link="https://wa.me/2250718617053"
        links={[
          { label: "Accueil", to: "/" },
          { label: "Formations", to: "#formations" },
          { label: "Programmes", to: "#programmes" },
        ]}
        navBgColor="#ffffff"
        navHeight = "80px"
        headerHeight="100vh"
        overlayColor="rgba(0, 0, 0, 0.6)"
      />

        <section className="activities">
          <div className="activity-items">
            <div className="activity-text">
              <h1><span>Nos Domaines </span>de Formations</h1>
              <p>Nous formons dans des domaines de plus en plus demandés sur le marchés.</p>
            </div>
            <div className='activity-card'>
              <Activity backgroundImage={image1} title="Intelligence Artificielle & Data" content="Formez-vous aux dernières tendances technologiques pour rester à la pointe de l'innovation." />
              <Activity backgroundImage={image2} title="Cloud & Cybersécurité" content="Apprenez à créer une identité visuelle forte et cohérente pour votre marque." />
              <Activity backgroundImage={image3} title="Marketing Digital" content="Maîtrisez les compétences essentielles pour diriger et développer votre entreprise." />
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
              <Courses 
                image={AI} 
                title="IA Générative pour les Professionnels" 
                format="AI" 
                content="Boostez votre productivité et automatisez vos tâches quotidiennes grâce aux meilleurs outils d'IA." 
              />

              <Courses 
                image={DM} 
                title="Introduction au Marketing Digital" 
                format="Marketing" 
                content="Développez l'impact de votre marque et attirez des clients avec des stratégies digitales efficaces." 
              />

              <Courses 
                image={DATA} 
                title="Analyse de Données avec PowerBI" 
                format="Data" 
                content="Transformez vos données brutes en tableaux de bord interactifs pour faciliter vos prises de décision." 
              /> 

              <Courses 
                image={EX} 
                title="Excel Professionnel" 
                format="Data" 
                content="Maîtrisez les formules, graphiques et tableaux croisés dynamiques pour gagner un temps précieux." 
              />

              <Courses 
                image={PY} 
                title="Formation Python" 
                format="AI" 
                content="Apprenez les bases de la programmation en Python pour automatiser vos projets et analyser vos données." 
              />

              <Courses 
                image={CYBER} 
                title="Introduction à la Cybersécurité" 
                format="Securité" 
                content="Comprenez les fondamentaux de la sécurité informatique pour protéger efficacement vos données." 
              />

              <Courses 
                image={DG} 
                title="Introduction au Graphic Design" 
                format="Design" 
                content="Concevez facilement des visuels professionnels et percutants pour vos réseaux et présentations." 
              />

              <Courses 
                image={PM} 
                title="Project Management" 
                format="Management" 
                content="Découvrez les méthodologies clés pour piloter vos projets avec succès, du cadrage à la livraison." 
              />
            </div>
          </div>
        </section >

        <section className='program' id='programmes'>
            <div className="program-content">
              <div className="program-content-text">
                <h1>Des formats d'apprentissage adaptés</h1>
                <p>Chez Beriverse, nous proposons différents formats d'apprentissage adaptés à vos objectifs et à votre disponibilité : Bootcamps intensifs, Masterclass, formations certifiantes et parcours professionnels. Chaque programme est conçu pour allier expertise, pratique et accompagnement, afin de vous permettre d'acquérir des compétences immédiatement applicables dans votre carrière.</p>
                <a href="https://wa.me/2250566309197" target="_blank" rel="noopener noreferrer">
                  <button>Discutons-en</button>
                </a>
              </div>

              {/* <div className="program-content-image">
                <img src="demy.jpg" alt="" />
              </div> */}
            </div>
        </section>

        <section className='cta'>
            <div className="cta-content">
                <h1>Devenez un Game Changer</h1>
                <p>Vous souhaitez suivre l'actualité de Beriverse ? Notre communauté est ouverte.</p>
                <Link to="https://chat.whatsapp.com/FYSCTOI5kJIKI64OnJ7VgG" target='_blank'><button>Intégrer la Communauté</button></Link>
            </div>
        </section>
    </div>
  )
}

export default Academy
