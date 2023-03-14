import {LinkWhatsapp} from './Whatsapp.styled'
import WhatsappLink from '../../Utils/WhatsappLink'
import WhatsappSVG from './whatsapp.svg'


export default function WhatsappButton(){

	return(
		<LinkWhatsapp href={WhatsappLink()} target="_blank">
      		<img src={WhatsappSVG} alt="" />
    	</LinkWhatsapp>
	)
}