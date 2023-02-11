import { useContext, useEffect, useState } from "react"
import { WebSocketContext } from '../../../FooterProvider/Index';

import {
	MainContainer,
	MainWrapper,
	BottomLine,
	LeftContainer,
	RightContainer
} from '../Styles/General.styled';

import RightCorner from '../../../Images/Decoracion_Banner_2.svg';
import WhatsappIcon from '../../../Images/whatsapp.svg';
import WhatsappLink from '../../../Utils/WhatsappLink';

import MockData from './PersonalizadoMOCK.json'




export default function CardsPlanes(){

	const [packContent, setPackContent] = useState(new Map())
	const ws = useContext(WebSocketContext)

	const HandleChange = (event)=>{

		const {value, id} = event.target
		
		const ProvMap = packContent

		if(ProvMap.has(id)){
			ProvMap.delete(id)
			return;
		}

		ProvMap.set(id, value)

		setPackContent(ProvMap)

		return;
	}
	
	const HandleSubmit = ()=>{

		const ProvArr = []

		packContent.forEach((el)=>{
			ProvArr.push(el)
		})

		const TemplateParams = {
			PackName: 'Personalizado',
			ExtraOptions: ProvArr.join('-')
		}

		ws.PlanHandler(TemplateParams)


	}


	const WhatsappHandler = ()=>{

		
		return WhatsappLink(`Hola! Me gustaría solicitar el plan General - Reinventate`)
	}


	return(

		<MainContainer> 
			<MainWrapper>
				<LeftContainer>
					<div className="Title fs-1 Luxed">
						PERSONALIZA TU PACK
					</div>
					<div className="SubTitle fs-4">
						Pack <span className="Luxed">#Personalizado</span>
					</div>
					<div className="Description fs-6">
						Sabemos que no todos buscan lo mismo, por eso si lo que buscas no se 
						<br/> ajusta a los packs anteriores ¡no te preocupes!, podés elegir exactamente lo
						<br/> que necesitas, <span className="Luxed"> como vos quieras.</span>
					</div>
					<div className="PackInfoPersonalizado">
						<div className="PersonalizadoLeft">
							{
								MockData.FirstHalf.map((el)=>
								<div className="CustomCheckbox">
									<input onChange={HandleChange} type="checkbox" id={el.ID} value={el.Text}/>
                                    <label htmlFor={el.ID}>{el.Text}</label>	
								</div>)
							}
						</div>
						<div className="PersonalizadoRight">
							{
								MockData.SecondHalf.map((el)=>
								<div className="CustomCheckbox">
									<input onChange={HandleChange} type="checkbox" id={el.ID} value={el.Text}/>
                                    <label htmlFor={el.ID}>{el.Text}</label>	
								</div>)
							}
						</div>
					</div>
					<div className="GreyInfo fs-6">
						Una vez que tengas los servicios seleccionados presiona el botón de “seleccionar” o el de whatsapp para hablarnos y cotizar tu pack.
					</div>
					<div className="MediaButtons fs-6">
						<button onClick={HandleSubmit}
						type="button" className="TextButton">
							Seleccionar
						</button>
						<button type="button" className="WhatsappButton">
							<a href={WhatsappHandler()} target="_blank">
								<img src={WhatsappIcon} className="WhatsappIcon"/>
							</a>
						</button>
					</div>
				</LeftContainer>
				<RightContainer>
					<div className="ColorBox">
						<div className="Arrow"/>
					</div>
				</RightContainer>
			</MainWrapper>
		</MainContainer>
	)
}