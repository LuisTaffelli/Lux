import { PrimaryButton } from "../Buttons";


import InstagramIcon from './Styles/Svg/Logo_ig.svg';
import WhatsappIcon from './Styles/Svg/Logo_Wsp.svg';
import MailIcon from './Styles/Svg/Logo_Mail.svg';
import { FooterSection } from "./Styles/Footer.styled";


export default function SMFooter() {
  return (
    <FooterSection>
        <div className='IconsContainer'>
            <a href="#">
                <img className='IgIcon' src={InstagramIcon}/>
            </a>
            <a href="#">
                <img className='WspIcon' src={WhatsappIcon}/>
            </a>
            <a href="mailto:lux.somos@gmail.com">
                <img className='MailIcon' src={MailIcon}/>
            </a>
        </div>
        
    </FooterSection>
  )
}
