



export default function WhatsappLink(Text){

	if(!Text){
		return `https://api.whatsapp.com/send?phone=5491162471651&text=Hola! Quiero conocer más acerca de su empresa!`		
	}


	return `https://api.whatsapp.com/send?phone=5491162471651&text=${Text}`
}