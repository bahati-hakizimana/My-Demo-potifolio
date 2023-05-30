
import NavBar from './sections/nav/NavBar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services'
import Potifolio from './sections/potfolio/Potifolio';
import Testmonial from './sections/testmonials/Testmonial';
import Faqs from './sections/fqs/Faqs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';

const App = () => {
  return (
    <main>
    <NavBar/>
    <Header/>
    <About/>
    <Services/>
    <Potifolio/>
    <Testmonial/>
    <Faqs/>
    <Contact/>
    <Footer/>
    <FloatingNav/>
    
    </main>
  )
}

export default App