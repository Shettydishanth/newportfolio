import { Container } from './styles'

import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://www.instagram.com/shetttydishanth/" className="logo">
        <span>Dishanth shetty</span>
       
      </a>
      <div>
        <p>
          This page  was made with ❤️ 
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/dishanth-shetty/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/Shettydishanth"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      
     
        <a
          href="https://www.instagram.com/shetttydishanth/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
