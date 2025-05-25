import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>FELT GOOD WATCHING MY PAGE?? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:shettydishanth4@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:shettydishanth4@gmail.com">shettydishanth4@gmail.com</a>
        </div>
        <div>
        <a href="tel:+917760803967"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+917760803967">(+91) 7760803967</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}