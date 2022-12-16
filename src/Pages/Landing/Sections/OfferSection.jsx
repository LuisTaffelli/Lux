
import {
	MainContainer, 
	TopTitleContainer, 
	TopDescriptionContainer,
	BottomTitleContainer,
	BottomDescriptionContainer,
	CardsContainer,
	InnerCard
} from './Styles/OfferSection.styled'

import ComMan from '../Images/Icono_CM.svg'
import MarDigital from '../Images/Icono_MKT.svg'
import DiGra from '../Images/Icono_DSGN.svg'
import Coach from '../Images/Icono_Coach.svg'
import Bars from '../Images/Decoracion_4.svg'

const Mockup = [
	{
		title: 'Community Manager',
		img: ComMan,
		className: 'CM'
	},
	{
		title: 'Marketing Digital',
		img: MarDigital
	},
	{
		title: 'Diseño Gráfico',
		img: DiGra
	},
	{
		title: 'Coach',
		img: Coach
	}

]


export default function OfferSection (){


	return (
		<MainContainer>
			<TopTitleContainer>
				<h2>¿Qué Ofrecemos?</h2>
			</TopTitleContainer>
			<CardsContainer>
				{Mockup.map((el)=><InnerCard>
					<img src={el.img} className={el.className}/>
					<h3>{el.title}</h3>
				</InnerCard>)}
			</CardsContainer>

			<img src={Bars} className='BottomDots' />

		</MainContainer>

	)


}