
import {
	MainContainer,
	MainWrapper,
	BottomLine,
	LeftContainer,
	RightContainer
} from '../Styles/General.styled'

import RightCorner from '../../../Images/Decoracion_Banner_2.svg'
import WhatsappIcon from '../../../Images/whatsapp.svg'






export default function CardsPlanes(){



	return(

		<MainContainer> 
			<MainWrapper>
				<LeftContainer>
					<div className="Title fs-1 Luxed">
						General
					</div>
					<div className="SubTitle fs-4">
						Pack <span className="Luxed">#Reinventate</span>
					</div>
					<div className="Description fs-6">
						Todo evoluciona con el tiempo, tu marca también debe hacerlo! Sobre todo<br/>
						en un ambiente competitivo como el inmobiliario y de desarrollos, destacar<br/>
						del resto y mantenerse fresco es clave y eso es lo que te ofrecemos en 
						<span className="Luxed"> Lux.</span>
					</div>
					<div className="Offers fs-6">
						Logo - identidad visual - posteos de redes - papelería institucional (flyers,<br/> 
						cartas, sobres, tarjetas de presentación, etc.) y cartelería.
					</div>
					<div className="MediaButtons fs-6">
						<button type="button" className="TextButton">
							Seleccionar
						</button>
						<button type="button" className="WhatsappButton">
							<img src={WhatsappIcon} className="WhatsappIcon"/>
						</button>
					</div>
				</LeftContainer>
				<RightContainer>
					<div className="ColorBox">
						<div className="Arrow"/>
					</div>
				</RightContainer>
			</MainWrapper>
			<BottomLine />
			<img src={RightCorner} className="RightCorner"/>
		</MainContainer>
	)
}