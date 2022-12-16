
import {
	MainContainer, 
	TopTitleContainer, 
	TopDescriptionContainer,
	BottomTitleContainer,
	BottomDescriptionContainer,
	CardsContainer,
	InnerCard
} from './Styles/PortfolioSection.styled'

import CrossRight from '../Images/Decoracion_3.svg'
import DotsBelow from '../Images/Decoracion_2.svg'
import BackgroundWhite from '../Images/Decoracion_Banner_2.svg'
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
	},
	{
		title: 'Lorem Ipsum'
	},
	{
		title: 'Lorem Ipsum'
	},
	{
		title: 'Lorem Ipsum'
	},

]


export default function PortfolioSection (){


	return (
		<MainContainer>
			<TopTitleContainer>
				<h2>Porfolio</h2>
			</TopTitleContainer>
			<TopDescriptionContainer>
				<p>
					Conoce los resultados finales de todos nuestros trabajos.
				</p>
			</TopDescriptionContainer>
			<CardsContainer>
				{Mockup.map((el)=><InnerCard>
					<div className='card'/>
					<h3>{el.title}</h3>
				</InnerCard>)}
			</CardsContainer>

			<img src={CrossRight} className='RightTop' />

		</MainContainer>

	)


}