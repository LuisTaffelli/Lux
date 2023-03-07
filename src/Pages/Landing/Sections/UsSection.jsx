import {useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import {
	MainContainer, 
	TopTitleContainer, 
	TopDescriptionContainer,
	BottomTitleContainer,
	BottomDescriptionContainer,
	PlanesContainer,
	CardsContainer,
	InnerCard
} from './Styles/UsSection.styled'

import DotsRight from '../../../Images/Decoracion_1.svg'
import DotsBelow from '../../../Images/Decoracion_2.svg'
import BackgroundWhite from '../../../Images/Decoracion_Banner_2.svg'
// import Bubbles from '../Images/Esferas.svg'
// import Bubbles from '../Images/Esferas.svg'

const Mockup = [
	{
		title: 'Pack #Iniciate',
		description: '¿Querés que tu negocio inmobiliario inicie con éxito? ¡Entonces necesitás #iniciate! Este pack de marketing inmobiliario completo te proporcionará todas las herramientas que necesitás para destacar entre la competencia ¡No pierdas más tiempo e #iniciate en el negocio inmobiliario con éxito!',
		key: 0 + (new Date())
	},
	{
		title: 'Pack #Reinventate',
		description: '¿Querés modernizar tu negocio inmobiliario y atraer más clientes? ¡Este pack es la solución perfecta! Con diseños innovadores y herramientas de marketing inmobiliario , te ayudará a actualizar la imagen de tu negocio y destacar entre la competencia. ¡Elegí #reinventate para hacer crecer tu negocio inmobiliario hoy mismo!',
		key: 1 + (new Date())
	},
	{
		title: 'Pack #Desarrollos',
		description: '¿Querés lanzar un desarrollo inmobiliario exitoso? ¡nosotros te ayudamos a hacerlo! Este pack tiene las herramientas necesarias para promocionar tu proyecto y atraer a más clientes. Con diseños creativos y estrategias de marketing, #desarrollos es la elección perfecta para cualquier proyecto inmobiliario y llevarlo al siguiente nivel.',
		key: 2 + (new Date())
	}

]


export default function UsSection ({Scroll}){

	const ScrollReference = useRef()

	const ScrollToBottom = ()=>{
		return ScrollReference.current.scrollIntoView({ behavior: 'smooth' });
	}

	
	useEffect(()=>{
		if(Scroll === 'Info'){
			ScrollToBottom();
		}

		return undefined
	},[Scroll])

	return (
		<MainContainer ref={ScrollReference}>
			<TopTitleContainer>
				<h2>¿Quiénes Somos?</h2>
			</TopTitleContainer>
			<TopDescriptionContainer>
				<p>
					Un equipo que trabaja y evoluciona día a día estrategias e ideas para llamar
					 y atraer tus futuros clientes. Trabajamos exclusivamente para el rubro inmobiliario, 
					 ya que buscamos llevar dicha evolución a distintas agencias que aún 
					 no explotan el máximo potencial de las redes y el uso diario del internet.
				</p>
				<p>
					Para obtener la confianza de posibles compradores provenientes del mundo digital, realizamos
					diseños y estrategias conceptuales que estarán en constante evolución para que su agencia esté
					conectada con la actualidad
				</p>
				<div className='FlexedRow'>
					<p>
						Somos conexión entre usuario y propiedad. Somos evolución, crecimiento, desarrollo.
						<span className='Colored'>
							Somos Lux.
						</span>
					</p>
				</div>
			</TopDescriptionContainer>
			<BottomTitleContainer>
				<h2>Nuestros Planes</h2>
			</BottomTitleContainer>
			<BottomDescriptionContainer>
				<p>Encontrá el que se adecue más a tus necesidades,</p>
				<p>nosotros nos encargamos del resto.</p>
			</BottomDescriptionContainer>
			<PlanesContainer>
				<CardsContainer>
					{Mockup.map((el)=><InnerCard key={el.key}>
						<h2>{el.title}</h2>
						<h5>{el.description}</h5>
					</InnerCard>)}
				</CardsContainer>

				<button type='button'>
					<Link to="/Planes"><h2>Ver Más &gt;</h2></Link>
				</button>


			</PlanesContainer>



			<img src={BackgroundWhite} className='RightTopCorner' />
			<img src={DotsRight} className='RightDots' />
			<img src={DotsBelow} className='BottomDots' />

		</MainContainer>

	)


}