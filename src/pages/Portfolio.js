import React from 'react'
import Header from '../components/Header'
import img1 from './assets/port.jpg'
import TopBar from '../components/TopBar'

function Portfolio() {
  return (
    <div>
      <TopBar />
      <Header 
        title="Notre Portfolio" 
        content="Découvrez nos réalisations et projets phares de Beriverse."
        image={img1}
        button="Parcourir"
      />

       <section className='portfolio'>
            <div className="portfolio-content">
              <div className="portfolio-content-text">
                <h1>Consultez l'ensemble de nos réalisations sur Behance</h1>
                <p>Cliquez sur le bouton afin de jeter un œil à nos projets.</p>
                <a href="https://www.behance.net/beriversestudio" target="_blank" rel="noopener noreferrer">
                  <button>Voir Plus</button>
                </a>
              </div>

              <div className="portfolio-content-image">
                {/* <img src="demy.jpg" alt="" /> */}
              </div>
            </div>
        </section>
    </div>
    
  )
}

export default Portfolio