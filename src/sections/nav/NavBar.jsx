
import Logo from '../../asset/logo.jpeg'
import data from './data'
import {IoIosColorPalette} from 'react-icons/io'
import './navbar.css'

const NavBar = () => {
  return (
   <nav>
    <div className="container nav__container">
      <a href="index.html" className='nav__logo'>
        <img src={Logo} alt="Logo" />
      </a>
      <ul className='nav__menu'>
      {
        data.map(item=> <li key={item.id}><a href={item.link}>{item.title}</a></li>)
      }
      </ul>
      <button id='theme__icon'><IoIosColorPalette /></button>


    </div>
   </nav>
  )
}

export default NavBar