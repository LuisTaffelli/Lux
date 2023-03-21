import { useContext, useEffect, useState, useRef } from "react"
import { WebSocketContext } from '../../../FooterProvider/Index';

import {
	MainContainer,
	MainWrapper,
	BottomLine,
	LeftContainer,
	RightContainer
} from '../Styles/General.styled'

import RightCorner from '../../../Images/Decoracion_Banner_2.svg'
import WhatsappIcon from '../../../Images/whatsapp.svg'
import WhatsappLink from '../../../Utils/WhatsappLink'
import Arrow from '../../../Images/Flecha.svg';




export default function CardsPlanes({
	ScrollTo
}){

	const PackRef = useRef()
	const DescriptionRef = useRef()
	const SeeMoreButton = useRef()
	const [ArrowState, setArrowState] = useState('Show')

	const ws = useContext(WebSocketContext)

	const ScrollToBottom = ()=>{
		return PackRef.current?.scrollIntoView({ behavior: 'smooth' });
	}

	const HandleMore = ()=>{

		const StylesSpan = DescriptionRef.current.style.display

		if(StylesSpan === 'none' || StylesSpan === ''){
			DescriptionRef.current.style.display = "inline";
			SeeMoreButton.current.innerHTML = "Ver Menos";
			setArrowState('Hidden');
			
			return null;
		}

		setArrowState('Show');
		DescriptionRef.current.style.display = "none";
		SeeMoreButton.current.innerHTML = "Ver Más";

		return null;

	}

	const HandleSubmit = ()=>{

		const TemplateParams = {
			PackName: 'Reinventate',
		}

		ws.PlanHandler(TemplateParams)

		ws.ChangeFlag()
	}

	const WhatsappHandler = ()=>{

		
		return WhatsappLink(`Hola! Me gustaría solicitar el plan General - Reinventate`)
	}

	useEffect(()=>{
		if(ScrollTo?.split(' ')[1] === '#Iniciate'){
			ScrollToBottom();
		}

		return undefined
	},[ScrollTo])


	return(

		<MainContainer ref={PackRef}> 
			<MainWrapper>
				<LeftContainer>
					<div className="Title fs-1">
						Pack <span className="Luxed">#Iniciate</span>
					</div>
					<div className="Description fs-6">
						¿Recién está iniciando en el mercado inmobiliario? ¡En <span className="Luxed">Lux</span> tenemos un pack perfecto con estrategias y herramientas de marketing y diseño para ayudarte a impulsar tu negocio y que arranques con todo!
						<span ref={DescriptionRef} className="ShowMore">
							<br/>
							Incluye diseño de logo e identidad corporativa para destacar de la competencia, diseño de papelería, gestión de redes sociales, publicidad en línea y email marketing para conectar aún más con tu público. De esta forma aumentá tu visibilidad, atraé más clientes y hacé crecer tu marca a largo plazo.<br/>
							Para partir con ventaja en este mercado, es necesario que tu marca se distinga del resto con una comunicación e identidad profesional; Contactanos para más información.
						</span>
					</div>
					<button className={"SeeMore " + ArrowState} ref={SeeMoreButton}
					onClick={HandleMore} type="button">
						Ver Más 
					</button>
					<div className="Offers fs-6">
						Logo - identidad visual - papelería (flyers, cartas, tarjetas de presentación, etc.) - posteos en redes - publicidad (Meta y Google Ads) -  email marketing - cartelería - sitio web.
					</div>
				</LeftContainer>
				<RightContainer>
					<div className="ColorBox">
						<div className="Arrow"/>
					</div>
				</RightContainer>
				<div className="MediaButtons fs-6">
					<button onClick={HandleSubmit}
					type="button" className="TextButton">
						Seleccionar
					</button>
					<button type="button" className="WhatsappButton">
						<a href={WhatsappHandler()} target="_blank">
							<div className="WhatsappIcon"/>
						</a>
					</button>
				</div>
			</MainWrapper>
			<img src={RightCorner} className="RightCorner"/>
		</MainContainer>
	)
}