
import AboutImage from '../../asset/about.jpeg'
import CV from '../../asset/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import './about.css'

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            <p>
              Builiding a project my client love have allways my passion. <br />
              Being i web development industry for over 4years and serving more than 7milion happy client worldwide. <br />
              I'm allways motivated to do more!
            </p>
            <p>
              Builiding a project my client love have allways my passion. <br />
              Being i web development industry for over 4years and serving more than 7milion happy client worldwide. <br />
              I'm allways motivated to do more!
            </p>
            <a href={CV} download className='btn primary'>Download my Cv
            <HiDownload/>
            </a>
          </div>
        </div>
      </div>
    </section>
   
  )
}

export default About