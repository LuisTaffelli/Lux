
import {
	MainContainer, 
	EmailInput,
	InputsContainer,
	TopInput,
	TextContainer,
	SendButton
} from './Styles/BottomSection.styled'

import Select from 'react-select'

import Bubbles from '../Images/ESFERAS.png'

import BackgroundWhite from '../Images/Decoracion_Banner_1.svg'


export default function BottomSection (){

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


	return (
		<MainContainer>
			<InputsContainer>
				<TopInput>
					<p>¿En que te podemos ayudar?</p>
					
					<Select styles={StylesSelect} 
  					placeholder='Selecciona un plan'/>
				</TopInput>
				<EmailInput>
					<input placeholder='Ingresa un mail' className='InputMail'/>
					
					<p>Recibira una respuesta aquí en la brevedad</p>
				</EmailInput>
			</InputsContainer>
			<TextContainer>
				<textarea className='Text' placeholder='Saludos, me interesa este plan...'/>

				<SendButton>Enviar</SendButton>

			</TextContainer>

			<img src={BackgroundWhite} className='RightBottomCorner' />
		</MainContainer>

	)


}