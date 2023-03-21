import styled from 'styled-components';
import {breakpoints} from '../../../../Utils/breakpoints'
import {Link} from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import BotonVidrio1 from '../../../../Images/Boton_1.png'
import BotonVidrio2 from '../../../../Images/Boton_2.png'

export const MirrorColumn = styled(Col)`

	
	max-width: 320px;

	box-shadow: inset 4px 1px 20px 0px rgba(240,240,240,1);

	backdrop-filter: blur(150px);

	display: flex;
	justify-content: center;
	align-items: center;


	border-radius: 4px;

	:after{
		content: "";
		width: 100%;
		height: 100%;
		position: absolute;
		top:0;
		left:0;
		box-shadow: 1px 1px 14px 0px rgba(0,0,0,.3);
		border-radius: 4px;
	}

	@media screen and (${breakpoints.pc}){
		max-width: 336px;
		margin-left: 1.2%;
	}

	@media screen and (${breakpoints.pcFullRes}){
		max-width: 380px;
		
	}

	@media screen and (${breakpoints.mobile}){
		max-width: unset;
		width: 90%;
		margin: 0 auto;
	}


`

export const PlanesBoton = styled(Button)`

	position: relative;

	z-index: 3;

	text-align: center;

	background-color: rgba(255,255,255);
	border-radius: 999999999999px;
	width: 25%;



	border: none;


	margin-top: 8px;
		
	&>h2{
		font-size: calc(1.425rem + 0.9vw);
		width: max-content;
		margin: 0 auto;
		color: var(--primary);
	}

	&:hover{
		background-color: #2B2B2B !important;
		border-color: transparent !important;
	}

	@media screen and (${breakpoints.mobile}){
		margin: 8px auto;
		&>h2{
			font-size: calc(1.225rem + 0.9vw);
		}
	}
	

`
export const StyledLink = styled(Link)`
	
	
	
`



export const MainContainer = styled(Container)`

	position: relative;
	background-image: var(--gradient1);
	min-height: 900px;

	padding-top: 100px;

	overflow-x: hidden;


	@keyframes ArrAbaPelotas {
		0% {top: 12%}
		100% {top: 24%}
	}

	@keyframes ArrAbaPelotasMobile {
		0% {top: 13%}
		100% {top:64%}
	}


	.Bubbles{
		position: absolute;
		width: 30%;
    	left: 86%;
    	top: 15%;
		transform: scaleX(-1);
		animation-name: ArrAbaPelotas;
		animation-duration: 5s;
		animation-iteration-count: infinite;
		animation-direction: alternate;

		@media screen and (${breakpoints.pc}){
			animation-name: ArrAbaPelotas;
		}


		// @media screen and (${breakpoints.ipad}){
		// 	animation-name: ArrAbaPelotasMobile;
		// }

	}

	.RightBottomCorner{
		position: absolute;
		width: 20%;
		bottom: 0;
		right:0;
	}

	.Arrows{
		position: absolute;
		left: -1%;
		width: 20%;
		top: 7%;

		@media screen and (${breakpoints.ipad}){
			top: unset;
			bottom: 0;
			width: 30%;
		}
	}

	.Cross{
		position: absolute;

		width: 6%;

		bottom: 45%;

		left: 42%;

		transform: translateX(100%);
	}

	@media screen and (${breakpoints.mobile}){
		min-height: 800px;
		max-height: 100vh;
		.Bubbles{
			display: none;
			width: 40%;
    		left: -21%;
    		top: 25%;
			transform: scaleX(1);
			animation-name: ArrAbaPelotasMobile !important;
		}

		.Cross{
			display: none;
		}

		.Arrows{
			top: unset;
			bottom: 0;
		}
	}



	@media screen and (${breakpoints.pc}){
		min-height: 960px;
	}

	@media screen and (${breakpoints.ipad}){
		padding-top: 40px;
	}

`

export const CenteredColumn = styled(Col)`

	margin: 0 auto !important;

	display: flex;

	flex-direction: column;

	@media screen and (${breakpoints.pc}){
		&>.row {
			margin-left: 3.2%;
		}
	}

	@media screen and (${breakpoints.ipad}){

		align-items: center;
		
		.text-light{
			text-align: center;
		}
	}



`


export const RowContainer = styled(Row)`

	position: relative;

	z-index: 2;

	margin:0 auto 80px auto;

	border-radius: 24px;

	justify-content: center;

	width: 42%;

	height: 280px;

	display: flex;

	align-items: center;

	.BlurTL{
		position: absolute;
		max-width: none;
    	width: 120%;
    	height: 120%;
    	left: 0;
    	top: 0;
    	transform: translateX(-8%) translateY(-2%);
    	z-index: 2;
    	@media screen and (${breakpoints.ipad}){
    		display: none;
    	}
	}

	.BlurTLMobile{
		display: none;
		@media screen and (${breakpoints.ipad}){
			display: inherit;
			position: absolute;
			max-width: none;
    		width: 120%;
    		height: 120%;
    		left: 0;
    		top: 0;
    		transform: translateX(-8%) translateY(-2%);
    		z-index: 2;
		}		
	}

	.BlurInner{
		position: absolute;
		transform: translateX(-42%);
		width: 28%;
		top: 16%;
		left: 0;
		z-index: 1;
	}

	@media screen and (${breakpoints.mobile}){
		width: 90%;
		.BlurTL{
    		width: 120%;
    		height: 122%;
    		left: 0;
    		top: -16px;
    		transform: translateX(-8.4%);
    		z-index: 2;
		}
	}

	@media screen and (${breakpoints.pc}){
		width: 42%;
	}

	


`


export const InnerTitle = styled(Col)`

	position: relative;

	z-index: 3;

	color: #FFF;

	box-shadow: inset 4px 1px 20px 0px rgba(240,240,240,1);

	border-radius: 14px;

	font-size: 1.8rem;

	text-align: center;

	:after{
		content: "";
		width: 100%;
		height: 100%;
		position: absolute;
		top:0;
		left:0;
		box-shadow: 1px 1px 14px 0px rgba(0,0,0,.3);
		border-radius: 14px;
	}

	&>h3{
		margin: 20px 0;
		@media screen and (${breakpoints.ipad}){
			width: 80%;
			margin: 30px auto 8px auto;
			font-size: calc(0.9rem + 0.9vw);
		}

		&>span{
			word-break: none;
		}
	}

	@media screen and (${breakpoints.mobile}){
		width: 100%;

		&>h3{
			width: 75%;
			font-size: calc(1rem + 0.9vw);
		}
		&>p{
			font-size: 1.2rem;
		}
	}

	@media screen and (${breakpoints.mobile}){
		
	}


`