import {useRef, useEffect} from 'react';

import {
	MainContainer,
	MainWrapper,
	BottomLine,
	LeftContainer,
	RightContainer
} from '../Styles/General.styled'

import WhatsappIcon from '../../../Images/whatsapp.svg'








export default function CardsPlanes({
	Title, PackName, PackDescription, PackContent, Index, Information, Extras
}){

	const DescriptionContentRef = useRef()
	const PackContentRef = useRef()

	useEffect(()=>{
		DescriptionContentRef.current.innerHTML = PackDescription
		return undefined;
	},[DescriptionContentRef])

	useEffect(()=>{
		PackContentRef.current.innerHTML = PackContent
		return undefined;
	},[PackContentRef])

	if(Index%2 !== 0){
		return(
		<MainContainer> 
			<MainWrapper>
				<LeftContainer>
					<div className="Title fs-1 Luxed">
						{Title}
					</div>
					<div className="SubTitle fs-4">
						Pack <span className="Luxed">{PackName}</span>
					</div>
					<div ref={DescriptionContentRef} className="Description fs-6"/>
					<div className="Offers fs-6" ref={PackContentRef} />
					<div className="ExtrasContainer">
						{Extras ? Extras.map((el, Extraindex)=>
							<div className="ExtrasInner" key={Extraindex + el[0]}>
								<span className="Extras fs-6">{el}</span>
							</div>) 
						: null}
					</div>
					{Information ? <div className="GreyInfo fs-6">
						{Information}
					</div>
					: null}
					<div className="MediaButtons fs-6">
						<button type="button" className="TextButton">
							Seleccionar
						</button>
						<button type="button" className="WhatsappButton">
							<img src={WhatsappIcon} className="WhatsappIcon"/>
						</button>
					</div>
				</LeftContainer>
				<RightContainer>
					<div className="ColorBox">
						<div className="Arrow"/>
					</div>
				</RightContainer>
			</MainWrapper>
			{Title ? <BottomLine /> : null}
		</MainContainer>
	)
	}

	return(
		<MainContainer> 
			<MainWrapper>
				<LeftContainer>
					<div className="ColorBox">
						<div className="Arrow"/>
					</div>
				</LeftContainer>
				<RightContainer>
					<div className="Title fs-1 Luxed">
						{Title}
					</div>
					<div className="SubTitle fs-4">
						Pack <span className="Luxed">{PackName}</span>
					</div>
					<div ref={DescriptionContentRef} className="Description fs-6"/>
					<div className="Offers fs-6" ref={PackContentRef} />
					<div className="ExtrasContainer">
						{Extras ? Extras.map((el, Extraindex)=>
							<div className="ExtrasInner" key={Extraindex + el[0]}>
								<button className="Extras fs-6" type="button">	{el} </button>
							</div>) 
						: null}
					</div>
					{Information ? <div className="GreyInfo fs-6">
						{Information}
					</div>
					: null}
					<div className="MediaButtons fs-6">
						<button type="button" className="TextButton">
							Seleccionar
						</button>
						<button type="button" className="WhatsappButton">
							<img src={WhatsappIcon} className="WhatsappIcon"/>
						</button>
					</div>
				</RightContainer>
			</MainWrapper>
			{Title ? <BottomLine /> : null}
		</MainContainer>
	)
}