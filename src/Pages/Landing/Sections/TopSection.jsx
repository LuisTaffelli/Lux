import {useState} from 'react';
import {Link} from 'react-router-dom'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
	MainContainer, 
	RowContainer,
	PlanesBoton,
	MirrorColumn, 
	InnerTitle,
	StyledLink,
	CenteredColumn,
} from './Styles/TopSection.styled';




import Bubbles from '../../../Images/ESFERAS.png';

import BackgroundWhite from '../../../Images/TopBackground.svg';
import Mirror from './Styles/vidrioDesktop.png';
import MirrorMobile from '../../../Images/Vidrio_4.png';
import BotonVidrio1 from '../../../Images/Boton_1.png';
import BotonVidrio2 from '../../../Images/Boton_2.png';
import Logo2 from '../../../Images/LOGO_2.svg';
import Decoration from '../../../Images/Decoracion_5.svg';



export default function TopSection (){

	const [MirrorStatus, setMirrorStatus] = useState(null)


	return (
		<MainContainer fluid className="w-100 h-100">
			<RowContainer>
				<CenteredColumn className="py-5 my-5">
					<InnerTitle>
						<h3>Somos un estudio de <span>-Marketing-</span></h3>
						<p className="fs-4">Especializados y exclusivos</p>
						<p className="fs-4">para el rubro inmobiliario</p>
					</InnerTitle>
					<img className='Bubbles' src={Bubbles}/>
	
				</CenteredColumn>
			</RowContainer>

			<img src={Decoration} className='Arrows' />
			<img src={Logo2} className='Cross' />
			<img src={BackgroundWhite} className='RightBottomCorner' />

			<Row className="p-5 my-5">
				<CenteredColumn className="py-5 my-5">
					<Row>
						<Col>
							<h3 className="text-light">
								Ya está todo preparado
							</h3>
						</Col>
					</Row>
					<Row>
						<Col>
							<h3 className="text-light">¡ACTUALIZÁ TU MARCA AHORA!</h3>
						</Col>
					</Row>
					<Row>
						<Col>
							<StyledLink to='/Planes' className="text-light">
								<PlanesBoton type="button">
									<h2>
										VER PLANES
									</h2>
								</PlanesBoton>
							</StyledLink>
						</Col>
					</Row>
				</CenteredColumn>
			</Row>

		</MainContainer>

	)


}