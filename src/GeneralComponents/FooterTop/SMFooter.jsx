
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import emailjs from '@emailjs/browser';


import { PrimaryButton } from "../Buttons";

import TopFooter from "./SelectorSection";

import InstagramIcon from './Styles/Svg/Logo_ig.svg';
import WhatsappIcon from './Styles/Svg/Logo_Wsp.svg';
import MailIcon from './Styles/Svg/Logo_Mail.svg';
import { FooterSection, Copyright } from "./Styles/Footer.styled";

import WhatsappLink from '../../Utils/WhatsappLink'


const MySwal = withReactContent(Swal)


export default function SMFooter() {


    const HandleGmail = async ()=>{
        let Message, EnterpriseName;
        const Email = await MySwal.fire({
            title: 'Ingresá tu Email!',
            input: 'email',
            inputPlaceholder: 'Ingresá tu Correo'
        })

        if(Email){
            const Empresa = await MySwal.fire({
                title: 'Agrega tu nombre',
                input: 'text',
                inputPlaceholder: 'Inmobiliaria Oscar...'
            })

            EnterpriseName = Empresa.value

        }

        if(EnterpriseName){
                
            const Mensaje = await MySwal.fire({
                title: 'Dejanos tu mensaje',
                input: 'textarea'
            })
        
            Message = Mensaje.value
        }

        if(Message){
            const templateParams = {
                from_name: Email.value,
                to_name: EnterpriseName,
                message: Message
            }


            emailjs.send('service_l0i5t12', 'template_h3uic6b', templateParams, '-Egg2ZV8NvbvsYqWm')
            
            .then(function(response) {
            
               window.alert('Tu correo fue enviado con exito!');
            
            }, function(error) {
            
               window.alert('Hubo un Error mandando el correo');
            
            });
        }

    }

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
                <a onClick={HandleGmail}>
                    <img className='MailIcon' src={MailIcon}/>
                </a>
            </div>
            
        </FooterSection>
  </>)
}
