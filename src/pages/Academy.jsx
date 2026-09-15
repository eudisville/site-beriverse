import React from 'react'
import { useEffect } from 'react'
import Header from '../components/Header'
// import AcademyLogo from './assets/BA Logo 2.png'
import AcademyImage from './assets/dcp.jpg'
import Activity from '../components/Activity'
import image1 from "./assets/imz3.jpg"
import image2 from "./assets/strat.jpg"
import image3 from "./assets/supply.jpg"
import image4 from "./assets/mas.jpg"
import image5 from "./assets/ter.jpg"
import image6 from "./assets/class.jpg"
import './styles/academy.css'
import { Link } from 'react-router-dom'
// import TopBar from '../components/TopBar'
// import Courses from '../components/Courses'
// import AI from "./assets/IAA.jpg"
// import DATA from "./assets/DA.jpg"
// import DM from "./assets/ME.jpg"

function Academy() {
  useEffect(() => {
    document.title = "Beriverse : Programmes";
  }, []);

  return (
    <div className='academy'>
      {/* <TopBar /> */}
      <Header
        title="Nos Programmes"
        content="Technologie, Management, Finance, et bien d'autres programmes."
        image={AcademyImage}
        // logo={AcademyLogo}
        button=""
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
              <h1>Nos Domaines de Formations</h1>
              <p>Nous formons dans des domaines de plus en plus demandés sur le marchés.</p>
            </div>
            <div className='activity-card'>
              <Activity backgroundImage={image1} title="Technologie" content="Formez-vous aux dernières tendances technologiques pour rester à la pointe de l'innovation." />
              <Activity backgroundImage={image2} title="Management & Stratégie" content="Apprenez le management et la stratégie pour diriger efficacement vos équipes." />
              <Activity backgroundImage={image3} title="Supply Chain" content="Maîtrisez la logistique et le commerce international." />
            </div>
          </div>
        </section>

        {/* <section className="courses" id='formations'>
          <div className="courses-items">
            <div className="courses-text">
              <h1>Nos Programmes</h1>
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
                image={DATA} 
                title="Analyse de Données avec PowerBI" 
                format="Data" 
                content="Transformez vos données brutes en tableaux de bord interactifs pour faciliter vos prises de décision." 
              />

            </div>
          </div>
        </section > */}


        <div className="prog">

          {/* <h1>Programmes</h1>
          <p>Découvrez nos programmes de formation conçus pour répondre aux besoins spécifiques des professionnels.</p> */}
          
          <div className="prog-items">

            <div className="prog-img">
              <img src={image4} alt="" />
            </div>

            <div className="prog-text">
              <h1>Executive Education</h1>
              <p>
                Pour dirigeants, cadres et managers. <br />
                Des programmes conçus pour les professionnels qui occupent, ou se préparent à occuper, 
                des responsabilités stratégiques au sein des organisations. Nos programmes 
                Executive Education abordent les enjeux qui transforment aujourd’hui le monde du 
                travail : leadership, stratégie, intelligence artificielle, transformation digitale, 
                management et performance. <br /><br />
            
                À travers des formats intensifs et orientés vers la pratique, nous créons des expériences 
                d’apprentissage permettant aux dirigeants et managers de prendre de meilleures décisions, 
                de développer leur leadership et d’accompagner efficacement les transformations de leurs 
                organisations.
              </p>

              <button style={{ background: "black", color: "white" }}>Voir la brochure</button>
            </div>

          </div>
        </div>
        <div className="prog">

          {/* <h1>Programmes</h1>
          <p>Découvrez nos programmes de formation conçus pour répondre aux besoins spécifiques des professionnels.</p> */}
          
          <div className="prog-items">

            <div className="prog-text">
              <h1>Corporate Learning</h1>
              <p>
                Pour les entreprises qui souhaitent développer leurs équipes et accompagner leurs transformations. <br />
                <br />
                Les organisations les plus performantes investissent dans les compétences de leurs collaborateurs. 
                Beriverse accompagne les entreprises dans la conception et le déploiement de dispositifs de 
                formation adaptés à leurs enjeux métiers, stratégiques et organisationnels.
              </p>

              <button style={{ background: "black", color: "white" }}>Voir la brochure</button>
            </div>

            <div className="prog-img">
              <img src={image5} alt="" />
            </div>

          </div>
        </div>
        <div className="prog">

          {/* <h1>Programmes</h1>
          <p>Découvrez nos programmes de formation conçus pour répondre aux besoins spécifiques des professionnels.</p> */}
          
          <div className="prog-items">

            <div className="prog-img">
              <img src={image6} alt="" />
            </div>

            <div className="prog-text">
              <h1>Professional</h1>
              <p>
                Pour les professionnels qui souhaitent développer leurs compétences. <br />
                <br />
                Le monde professionnel évolue rapidement. De nouvelles technologies, de nouvelles méthodes de 
                travail et de nouvelles exigences transforment les métiers et les compétences attendues.
                <br /> <br />
                Nos programmes de Professional Development permettent aux professionnels de renforcer leurs 
                compétences, d’acquérir de nouvelles expertises et de rester compétitifs dans un environnement 
                en constante évolution. De la technologie au management, en passant par la data, l’intelligence 
                artificielle, la finance et les compétences professionnelles, chaque programme est conçu pour 
                être directement applicable aux réalités du travail.
              </p>

              <button style={{ background: "black", color: "white" }}>Voir la brochure</button>
            </div>

          </div>
        </div>
        <section className='cta'>
            <div className="cta-content">
                <h1>Devenez un Game Changer</h1>
                <p>Vous souhaitez suivre l'actualité de Beriverse ? Notre communauté est ouverte.</p>
                <Link to="https://chat.whatsapp.com/FYSCTOI5kJIKI64OnJ7VgG" target='_blank'><button>Intégrer le Réseau d'Alumnis</button></Link>
            </div>
        </section>
    </div>
  )
}

export default Academy
