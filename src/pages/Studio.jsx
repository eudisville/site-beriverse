import React from 'react'
import Header from '../components/Header'
import img1 from './assets/pep.png'
import StudioLogo from './assets/Bstudio Blanc.png'
import TopBar from '../components/TopBar'
import Card from '../components/Card'
import Activity from '../components/Activity'
import './styles/event.css'
import pic1 from "./assets/ads.jpg"
import pic2 from "./assets/id.jpg"
import pic3 from "./assets/cre.jpg"
import pic4 from "./assets/dj.jpg"
import pic5 from "./assets/cov.jpg"
import pic6 from "./assets/med.jpg"
import pic7 from "./assets/music.jpg"
import pic8 from "./assets/ent.jpg"
import pic9 from "./assets/ran.jpg"

function Studio() {
  return (
    <div>
      <TopBar
        bgColor= "#000"
        fontColor='#fff'
        borBottom='1px solid #2b2b2b'
      />
      <Header 
        title="Beriverse Studio" 
        content="Agence de Communication Créative du groupe Beriverse"
        image={img1}
        button="Parcourir"
        logo={StudioLogo}
        logoWidth = "140px"

        links={[
          { label: "Accueil", to: "/" },
          { label: "Nos Services", to: "#service" },
          { label: "Cibles", to: "#sectors" },
          { label: "Portfolio", to: "#programmes" },
          { label: "Contact", to: "#programmes" },
        ]}

        navBgColor="#000000"
        linkColor="#fff"
        navHeight = "80px"
        headerHeight="95vh"
        overlayColor="rgba(0, 0, 0, 1)"
      />

      <section className='services' id='service'>
        <div className="card-items">
            <div className="services-text">
              <h1>Nos Services</h1>
            </div>
            <div className='card-card'>
              <Card 
                backgroundImage={pic1}
                title="Communication 360°" 
                content="Exploitez la puissance de vos données grâce à nos solutions d'intelligence artificielle et d'analyse avancée."
              />
              <Card 
                backgroundImage={pic2}
                title="Identité Visuelle & Branding" 
                content="Nous concevons des expériences client innovantes et personnalisées pour fidéliser vos clients et stimuler la croissance de votre entreprise."
              />
              <Card
                backgroundImage={pic3}
                title="Direction Artistique"
                content="Nos solutions d'automatisation permettent de réduire les tâches répétitives et d'améliorer l'efficacité opérationnelle."  
              />
              <Card
                backgroundImage={pic4}
                title="DJing"
                content="Nos solutions d'automatisation permettent de réduire les tâches répétitives et d'améliorer l'efficacité opérationnelle."  
              />
              <Card
                backgroundImage={pic5}
                title="Production Audiovisuel"
                content="Nos solutions d'automatisation permettent de réduire les tâches répétitives et d'améliorer l'efficacité opérationnelle."  
              />
              <Card
                backgroundImage={pic6}
                title="Couverture Médiatique"
                content="Nos solutions d'automatisation permettent de réduire les tâches répétitives et d'améliorer l'efficacité opérationnelle."  
              />
            </div>
          </div>
      </section>

      
        <section className="cards" id='sectors'>
          <div className="card-items">
            <div className="card-text">
              <h1>Pour Qui ?</h1>
            </div>
            <div className='activity-card'>
              <Activity backgroundImage={pic7} title="Artistes" content="" />
              <Activity backgroundImage={pic8} title="Divertissement & Médias" content="" />
              <Activity backgroundImage={pic9} title="Entreprises" content="" />
            </div>
          </div>
        </section>
      
    </div>
    
  )
}

export default Studio