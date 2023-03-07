import { useContext, useEffect, useState, useRef } from "react"
import { WebSocketContext } from '../../FooterProvider/Index';
import emailjs from '@emailjs/browser';

import {
	MainContainer, 
	EmailInput,
	InputsContainer,
	TopInput,
	TextContainer,
	SendButton
} from './Styles/BottomSection.styled'

import Select from 'react-select'

import Bubbles from '../../Images/ESFERAS.png'

import BackgroundWhite from '../../Images/Decoracion_6.svg'

const Options =[ 
	{ value: 'Iniciate', label: 'Iniciate' },
	{ value: 'Reinventate', label: 'Reinventate' },
	{ value: 'Desarrollos', label: 'Desarrollos' },
	{ value: 'Seguimiento 1', label: 'Seguimiento 1' },
	{ value: 'Seguimiento 2', label: 'Seguimiento 2' },
	{ value: 'Marca Personal', label: 'Marca Personal' },
	{ value: 'Personalizado', label: 'Personalizado' }
]

const StylesSelect = {
	control: (baseStyles, state) => (
	{
   		...baseStyles,
   		borderRadius: 80,
   		width: '100%',
   	}),
   	dropdownIndicator: base => ({
   		...base,
   		color: "#E61952" // Custom colour
 		})
}

export default function BottomSection (){

	const ws = useContext(WebSocketContext)
	const [defaultSelectedValue, setDefaultSelectedValue] = useState(null)
	const [TextMail, setTextMail] = useState(undefined)
	const [UserEmail, setUserEmail] = useState(null)
	const [EnterpriseName, setEnterpriseName] = useState(null)
	const divRef = useRef(null);

	const ScrollToBottom = ()=>{
		return divRef.current.scrollIntoView({ behavior: 'smooth' });
	}

	useEffect(()=>{

		if(!ws.Flag){
			return undefined;
		}

		const NewArr = Options.filter((el)=>el.value === ws.PersonalInfo.name)[0]
		setDefaultSelectedValue(NewArr);
		setTextMail(ws.PersonalInfo.text);
		ScrollToBottom();
		return undefined;
	},[ws])

	const HandleChange = (Selected)=>{

		setDefaultSelectedValue(Selected)

	}

	const HandleEmail = (event)=>{
		setUserEmail(event.target.value)
	}

	const HandleName = (event)=>{
		setEnterpriseName(event.target.value)
	}

	const HandleTextArea = (event)=>{
		setTextMail(event.target.value)
	}

	const HandleSubmit = ()=>{

		const templateParams = {
				from_name: UserEmail,
				to_name: EnterpriseName,
				message: TextMail
		}


		emailjs.send('service_l0i5t12', 'template_h3uic6b', templateParams, '-Egg2ZV8NvbvsYqWm')
    	
    	.then(function(response) {
    	
    	   window.alert('Tu correo fue enviado con exito!');
    	
    	}, function(error) {
    	
    	   window.alert('Hubo un Error mandando el correo');
    	
    	});

	}

	return (
		<MainContainer ref={divRef}>
			<InputsContainer>
				<TopInput>
					<p>¿En que te podemos ayudar?</p>
					
					<Select defaultValue={defaultSelectedValue}
					styles={StylesSelect} 
					options={Options}
					onChange={HandleChange}
  					placeholder='Selecciona un plan'/>
				</TopInput>
				<EmailInput>
					<input onChange={HandleName}
					placeholder='Nombre de la empresa' className='InputMail'/>
				</EmailInput>
				<EmailInput>
					<input onChange={HandleEmail}
					placeholder='Ingresa un mail' className='InputMail'/>
					
					<p>Recibira una respuesta aquí en la brevedad</p>
				</EmailInput>
			</InputsContainer>
			<TextContainer>
				<textarea className='Text' onChange={HandleTextArea} value={TextMail}
				placeholder='Saludos, me interesa este plan...'

				/>

				<SendButton onClick={HandleSubmit}>Enviar</SendButton>

			</TextContainer>

			<img src={BackgroundWhite} className='RightBottomCorner' />
		</MainContainer>

	)


}