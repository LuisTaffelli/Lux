
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
		title: 'Lorem Ipsum'
	},
	{
		title: 'Lorem Ipsum'
	},
	{
		title: 'Lorem Ipsum'
	}

]


export default function UsSection (){


	return (
		<MainContainer>
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
					</p>
					<p className='Colored'>
						Somos Lux.
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
					{Mockup.map((el)=><InnerCard>
						<h3>{el.title}</h3>
					</InnerCard>)}
				</CardsContainer>

				<button type='button'>
					<h2>Ver Más &gt;</h2>
				</button>


			</PlanesContainer>



			<img src={BackgroundWhite} className='RightTopCorner' />
			<img src={DotsRight} className='RightDots' />
			<img src={DotsBelow} className='BottomDots' />

		</MainContainer>

	)


}