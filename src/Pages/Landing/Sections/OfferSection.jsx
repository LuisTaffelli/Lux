

import {
	MainContainer, 
	TopTitleContainer, 
	TopDescriptionContainer,
	BottomTitleContainer,
	BottomDescriptionContainer,
	CardsContainer,
	InnerCard
} from './Styles/OfferSection.styled'

import ComMan from '../../../Images/Icono_CM.svg'
import MarDigital from '../../../Images/Icono_MKT.svg'
import DiGra from '../../../Images/Icono_DSGN.svg'
import Coach from '../../../Images/Icono_Coach.svg'
import Bars from '../../../Images/Decoracion_4.svg'
import LeftCorner from '../../../Images/Decoracion_7.svg'

const Mockup = [
	{
		title: 'Community<br>Manager',
		img: ComMan,
		className: 'CM',
		lightText: 'Estar activo en redes es importante para generar posibles compradores.',
		boldText: ['Diseños de estrategias de comunicación, atención a consultas/dudas. Gestionamos y administramos tus redes.'],
	},
	{
		title: 'Marketing Digital',
		img: MarDigital,
		lightText: 'Una estrategia de comunicación es esencial para atraer la atención hacia tu marca',
		boldText: ['Análisis y acumulación de datos, Identificación de oportunidades y problemas, atracción de público ideal.'],
	},
	{
		title: 'Diseño Gráfico',
		img: DiGra,
		lightText: 'Diferenciarse de su competencia hace a su marca memorable, lo que despierta interés.',
		boldText: ['Creación de logo, Identidad visual, realización de piezas para R.R.S.S'],
	},
	{
		title: 'Coaching',
		img: Coach,
		lightText: 'Para quienes quieran administrar sus propias RRSS ofrecemos unas tutorías prácticas e introductoras.',
		boldText: ['- Diseño','- Community Manager','- Rubro inmobiliario'],
	}

]


export default function OfferSection (){


	return (
		<MainContainer>
			{/*<img src={LeftCorner} className='LeftCorner'/>*/}
			<TopTitleContainer>
				<h2>¿Qué Ofrecemos?</h2>
			</TopTitleContainer>
			<CardsContainer>
				{Mockup.map((el, index)=><InnerCard key={index+el.title}>
					<img src={el.img} className={el.className}/>
					<h3 className="fs-3" dangerouslySetInnerHTML={{__html: el.title}}/>
					<p className="fs-6">{el.lightText}</p>
					{el.boldText.map(text=><h5 className="fs-7" key={text}>{text}</h5>)}
				</InnerCard>)}
			</CardsContainer>

			{/*<img src={Bars} className='BottomDots' />*/}

		</MainContainer>

	)


}