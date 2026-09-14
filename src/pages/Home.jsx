import React from 'react'
import Header from '../components/Header'
// import Activity from '../components/Activity'
import Card from '../components/Card'
import './styles/styles.css'
import './styles/rse.css'
// import img1 from '../components/assets/des.jpg'
// import img2 from '../components/assets/Bac.jpg'
import img3 from './assets/twos.jpg'
import back from './assets/team.jpg'
import img4 from './assets/cm.jpg'
import img5 from './assets/ran.jpg'
import img6 from './assets/ia.jpg'
import img7 from './assets/ba-header.jpg'
import TopBar from '../components/TopBar'

function Home() {
  return (
    <div>
      <TopBar />
      <Header
        title="Welcome to Beriverse" 
        content="Bienvenue sur le site officiel de Beriverse Incorporation" 
        image={back} 
        headerHeight="95vh"
      />

      <section className='about'>
        
            <h4>Notre Groupe</h4>
            <h1><span>A Propos</span> de Beriverse</h1>
        
            <p>
              Chez Beriverse, nous croyons que la performance des organisations repose avant tout sur la qualité des compétences, des décisions et des talents qui les composent.
              Nous sommes une institution dédiée au développement des compétences professionnelles, à la formation des dirigeants, managers et collaborateurs, ainsi qu’à l’accompagnement des organisations face aux transformations de leur environnement.
              À travers des programmes conçus autour des enjeux réels des entreprises, nous développons des compétences en management, leadership, technologie, intelligence artificielle, finance, gestion de projet, digital et nouvelles pratiques professionnelles.
            </p>
          
        <div className="about-img"></div>
      </section>

      {/* <section className="activities">
          <div className="activity-items">
            <div className="activity-text">
              <h1>Ce que nous faisons</h1>
            </div>
            <div className='activity-card'>
              <Activity 
              backgroundImage={img1} 
              title="Technologie" 
              content="Nous contribuons activement à la transformation 
              digitale des organisations et développons des solutions grand public." 
              />

              <Activity 
              backgroundImage={img2} 
              title="Education" 
              content="Avec Beriverse Academy, notre objectif est démocratiser l'éducation technologique." 
              />

              <Activity 
              backgroundImage={img3} 
              title="Audiovisuel" 
              content="Parce que l'aspect créatif compte, nous travaillons sur l'aspect artistique de vos projets." />
            </div>
          </div>
        </section> */}

        <section className="slogan">
          <h1>Welcome to <span>Beriverse </span></h1>
        </section>

        <section className='business'>
          <div className="business-content">
            <h1>Programmes</h1>
            <p> 
              Nos programmes sont conçus pour aider les entreprises à développer les compétences de leurs collaborateurs, à améliorer leur performance et à atteindre leurs objectifs stratégiques.
            </p>
            <a href="/brochure.pdf" download>
              <button>Télécharger la brochure</button>
            </a>
          </div>
        </section>

        <section className='actions'>
            <div className="actions-content">
              <div className="actions-content-image">
                <img src={img3} alt="" />
              </div>
              
              <div className="actions-content-text">
                <h1>Nous <br /> <span>innovons</span> <br /> et <span> impactons</span></h1>
                <p>Chez Beriverse, nous développons des initiatives RSE dédiées à la nouvelle génération afin de l’inspirer, 
                  de la former et de lui donner les clés pour construire l’avenir.</p>

                <div className="speak">
                  <h3><span>" </span>Beriverse n'est pas seulement une entreprise, c'est un mouvement d'innovation et d'impact.</h3>
                  <h2>Eudes Koffi</h2>
                  <p>Manager Executif</p>
                </div>
                <a href="https://www.behance.net/beriversestudio" target="_blank" rel="noopener noreferrer">
                  {/* <button>Voir Plus</button> */}
                </a>
              </div>

            </div>
        </section>

        <section className="cards">
          <div className="card-items">
            <div className="card-text">
              <h1>Quoi de neuf</h1>
            </div>
            <div className='card-card'>
              <Card 
                backgroundImage={img4} 
                title="Le véritable enjeu de l'IA n'est pas technologique. Il est humain."
                content=""
              />
              <Card 
                backgroundImage={img5} 
                title="Pourquoi les entreprises doivent repenser leur stratégie de formation" 
                content="" 
              />
              <Card 
                backgroundImage={img6} 
                title="L'IA va-t-elle remplacer les managers ?" 
                content="" 
              />
              <Card 
                backgroundImage={img7} 
                title="Les compétences qui feront la différence dans les entreprises africaines en 2030" 
                content="" 
              />
            </div>
          </div>
        </section>

        {/* <section className='join'>
          <div className="join-content">
            <h1>Rejoignez-nous</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos minima iusto voluptates, maxime quam facilis eum voluptatibus dolorum rem labore cupiditate odio sit.</p>
            <button>Nous Rejoindre</button>
          </div>
        </section> */}

    </div>
  )
}

export default Home