
import {
	MainContainer
} from '../Styles/TopSection.styled'

import Bubbles from '../../../Images/Esferas.svg'
import Decoration from '../../../Images/Decoracion_1_Yellow.svg'







export default function TopPlanes(){

	return (


		<MainContainer> 
			<div className="Title fs-1">
				Nuestros Planes
			</div>
			<div className="Description fs-5">
				Tenemos todo pensado para su inmobiliaria, ya sea recién llegada<br/>
				al mercado o con una larga trayectoria, nuestros servicios<br/>
				abarcan todo lo que se necesita para la era digital.
			</div>
			<img src={Bubbles} className="Bubbles"/>
			<img src={Decoration} className="Decoration"/> 
		</MainContainer>
	)

}