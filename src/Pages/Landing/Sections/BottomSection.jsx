
import {
	MainContainer, 
	TitleContainer, 
	InnerTitle
} from './Styles/TopSection.styled'

import Bubbles from '../Images/ESFERAS.png'

import BackgroundWhite from '../Images/TopBackground.svg'
import Mirror from '../Images/VIDRIO.png'
import Logo2 from '../Images/LOGO_2.svg'
import Decoration from '../Images/Decoracion_5.svg'

export default function BottomSection (){


	return (
		<MainContainer>
			<TitleContainer>
				<InnerTitle>
					<h3>Somos un estudio de -Marketing-</h3>

					<p>Especializados y exclusivos</p>
					<p>para el rubro inmobiliario</p>

				</InnerTitle>


				<img src={Mirror} className='BlurTL'/>
			</TitleContainer>

			<img src={Decoration} className='Arrows' />
			<img className='Bubbles' src={Bubbles}/>
			<img src={Logo2} className='Cross' />
			<img src={BackgroundWhite} className='RightBottomCorner' />
		</MainContainer>

	)


}