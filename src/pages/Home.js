import React from 'react'
import Header from '../components/Header'
// import Activity from '../components/Activity'
import Card from '../components/Card'
import './styles/styles.css'
// import img1 from '../components/assets/des.jpg'
// import img2 from '../components/assets/Bac.jpg'
// import img3 from '../components/assets/vid.jpg'
import img4 from './assets/onces.jpg'
import img5 from './assets/twos.jpg'
import img6 from './assets/threee.jpg'

function Home() {
  return (
    <div>
      <Header 
        title="Inspirer et Transformer le monde." 
        content="Bienvenue sur le site officiel de Beriverse Incorporation" 
        image="cd.jpg" 
      />

      <section className='about'>
        <h4>Beriverse Incorporation</h4>
        <h1><span>Un entreprise</span> Nouvelle Génération</h1>
        <p>
           Beriverse Incorporation est une société ivoirienne active dans 
            les secteurs de la Technologie, l’Education et l'Audiovisuel.
            Fondée en 2025, la mission de Beriverse est : Permettre à tous d'accroître ses capacités.
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

        <section className="cards">
          <div className="card-items">
            <div className="card-text">
              <h1><span>Aux dernières</span> nouvelles</h1>
            </div>
            <div className='card-card'>
              <Card 
                backgroundImage={img4} 
                title="Beriverse partenaire du programme Tremplin du Digital" 
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

        <section className='business'>
          <div className="business-content">
            <h1>Nos Branches</h1>
            <p>Nous disposons de plusieurs division dont chacune résout un problème spécifique de la société actuelle.</p>
            <button>Télécharger la brochure</button>
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