import { useContext, useEffect, useState, useRef } from "react"
import { WebSocketContext } from '../../../FooterProvider/Index';

import {
	MainContainer,
	MainWrapper,
	BottomLine,
	LeftContainer,
	RightContainer
} from '../Styles/General.styled'

import WhatsappLink from '../../../Utils/WhatsappLink'	


export default function CardsPlanes({
	Title, PackName, PackDescription,
	PackContent, Index, Information, Extras,
	ScrollTo
}){

	const ws = useContext(WebSocketContext);
	const DescriptionContentRef = useRef();
	const PackContentRef = useRef();
	const InfoContent = useRef();
	const PackRef = useRef();

	const [packContent, setPackContent] = useState(new Map())

	const ScrollToBottom = ()=>{
		return PackRef.current?.scrollIntoView({ behavior: 'smooth' });
	}

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


	useEffect(()=>{
		if(ScrollTo?.split(' ')[1] === PackName){
			ScrollToBottom()
		}
		return undefined
	},[ScrollTo])

	const WhatsappHandler = ()=>{

		if(packContent.size){
			return WhatsappLink(`Hola! Me gustaría solicitar el plan de ${Title}-${PackName.split('#')[1]} con algunos Extras`)			
		}

		return WhatsappLink(`Hola! Me gustaría solicitar el plan de ${Title}-${PackName.split('#')[1]}`)
	}

	const HandleSubmit = ()=>{

		const ProvArr = []

		packContent.forEach((el)=>{
			ProvArr.push(el)
		})

		const TemplateParams = {
			PackName: PackName.split('#')[1],
			ExtraOptions: ProvArr.join('-')
		}

		ws.PlanHandler(TemplateParams)
		ws.ChangeFlag()

	}

	useEffect(()=>{
		DescriptionContentRef.current.innerHTML = PackDescription
		return undefined;
	},[DescriptionContentRef])

	useEffect(()=>{
		PackContentRef.current.innerHTML = PackContent
		return undefined;
	},[PackContentRef])

	useEffect(()=>{
		if(!InfoContent.current){
			return undefined
		}
		InfoContent.current.innerHTML = Information
		return undefined;
	},[InfoContent])

	if(Index%2 !== 0){
		return(
		<MainContainer ref={PackRef}> 
			<MainWrapper>
				<LeftContainer>
					<div className="Title fs-1">
						Pack <span className="Luxed">{PackName}</span>
					</div>
					<div ref={DescriptionContentRef} className="Description fs-6"/>
					<div className="Offers fs-6" ref={PackContentRef} />
					<div className="PackInfoPersonalizado">
						<div className="PersonalizadoLeft">
						{Extras ? Extras.map((el, Extraindex)=><div className="CustomCheckbox" key={Extraindex + el[0]}>
								<input onChange={HandleChange} type="checkbox" id={Extraindex + el[0]} value={el}/>
                    		    <label htmlFor={Extraindex + el[0]}>{el}</label>	
							</div>)
						: null}
						</div>
					</div>
					{Information ? <div ref={InfoContent} className="GreyInfo fs-6"/>
					: null}
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
		</MainContainer>
	)
	}

	return(
		<MainContainer ref={PackRef} Status="Colored"> 
			<MainWrapper position="Right">
				<LeftContainer position="Right">
					<div className="ColorBox">
						<div className="Arrow"/>
					</div>
				</LeftContainer>
				<RightContainer>
					<div className="Title fs-1">
						Pack <span className="Luxed">{PackName}</span>
					</div>
					<div ref={DescriptionContentRef} className="Description fs-6"/>
					<div className="Offers fs-6" ref={PackContentRef} />
					<div className="PackInfoPersonalizado">
						<div className="PersonalizadoLeft">
						{Extras ? Extras.map((el, Extraindex)=><div className="CustomCheckbox" key={Extraindex + el}>
								<input onChange={HandleChange} type="checkbox" id={Extraindex + el} value={el}/>
                    		    <label htmlFor={Extraindex + el}>{el}</label>	
							</div>)
						: null}
						</div>
					</div>
					{Information ? <div ref={InfoContent} className="GreyInfo fs-6"/>
					: null}
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
		</MainContainer>
	)
}