
import HeaderImage from '../../asset/en4.jpeg'
import data from './data'

import './header.css'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header portait" />
          
        </div>
        <h3>H.Bahati Jackson</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Soluta est laborum quaerat quisquam laudantium nesciunt eaque, <br />
            dolores voluptate incidunt exercitationem,<br />
             debitis accusantium nostrum, unde atque! Eaque explicabo odit minima eligendi. <br />
          </p>
          <div className="header__act">
            <a href="#contact" className='btn primary'>Let's talk</a>
            <a href="#portfolio" className='btn light'>My Work</a>
          </div>
        <div className="header__socials">
        {
          data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
        }  
        </div>
      </div>
    </header>
  )
}

export default Header