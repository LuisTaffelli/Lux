import { PrimaryButton } from "../Buttons";

import TopFooter from "./SelectorSection";

import InstagramIcon from './Styles/Svg/Logo_ig.svg';
import WhatsappIcon from './Styles/Svg/Logo_Wsp.svg';
import MailIcon from './Styles/Svg/Logo_Mail.svg';
import { FooterSection, Copyright } from "./Styles/Footer.styled";

import WhatsappLink from '../../Utils/WhatsappLink'


export default function SMFooter() {
  return (<>
        <TopFooter />
        <FooterSection>
            <Copyright>2022 © Todos los derechos reservados Somos Lux. Desarrollado por Luis Taffelli</Copyright>
            <div className='IconsContainer'>
                <a href="#">
                    <img className='IgIcon' src={InstagramIcon}/>
                </a>
                <a href={WhatsappLink()} target="_blank">
                    <img className='WspIcon' src={WhatsappIcon}/>
                </a>
                <a href="mailto:lux.somos@gmail.com">
                    <img className='MailIcon' src={MailIcon}/>
                </a>
            </div>
            
        </FooterSection>
  </>)
}
