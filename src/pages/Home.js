import React from 'react'
import Header from '../components/Header'
// import Activity from '../components/Activity'
import Card from '../components/Card'
import './styles/styles.css'
import './styles/rse.css'
// import img1 from '../components/assets/des.jpg'
// import img2 from '../components/assets/Bac.jpg'
// import img3 from '../components/assets/vid.jpg'
import img4 from './assets/onces.jpg'
import img5 from './assets/twos.jpg'
import img6 from './assets/threee.jpg'
import img7 from './assets/frame.png'
import TopBar from '../components/TopBar'

function Home() {
  return (
    <div>
      <TopBar />
      <Header
        title="Beriverse c'est ici" 
        content="Bienvenue sur le site officiel de Beriverse Incorporation" 
        image="s.jpg" 
        headerHeight="95vh"
      />

      <section className='about'>
        
            <h4>Notre Groupe</h4>
            <h1><span>A Propos</span> de Beriverse</h1>
        
            <p>
              Chez Beriverse, nous ne nous contentons pas de créer des solutions.
              Nous connectons la technologie, le savoir et la création pour donner vie aux idées et faire émerger de nouvelles possibilités. <br />
              <br />Convaincus que l’innovation, l’éducation et les contenus ont un rôle clé dans le développement des individus et des organisations, 
              nous agissons chaque jour pour concevoir des solutions utiles, transmettre des compétences et produire des expériences à fort impact.<br />
              <br /><span style={{ fontWeight: 'bold' }}>Notre mission, Rendre la technologie, l'éducation et la créativité accessibles à tous</span>.
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
          <h1><span>Beriverse </span>c'est ici</h1>
        </section>

        <section className='business'>
          <div className="business-content">
            <h1>Nos Expertises</h1>
            <p> 
              Beriverse mobilise la technologie, l’éducation et l’audiovisuel pour créer des solutions utiles, transmettre des savoirs et produire des contenus à impact, au service du développement et de la transformation.
            </p>
            <a href="/Brochure - Beriverse.pdf" download>
              <button>Télécharger la brochure</button>
            </a>
          </div>
        </section>

        <section className='actions'>
            <div className="actions-content">
              <div className="actions-content-image">
                <img src={img7} alt="" />
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
                title="Beriverse adopte une nouvelle signature"
                content=""
              />
              <Card 
                backgroundImage={img5} 
                title="Digital Day l'évènement 100% Tech" 
                content="" 
              />
              <Card 
                backgroundImage={img6} 
                title="Notre engagement dans le développement durable" 
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