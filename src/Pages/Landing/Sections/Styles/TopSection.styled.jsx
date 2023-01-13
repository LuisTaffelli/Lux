import styled from 'styled-components';
import {breakpoints} from '../../../../Utils/breakpoints'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const MirrorColumn = styled(Col)`

	

	position: absolute;
	top: ${({status})=> status ? '-36px' : '-28px'};
	left: -23px;

	width: 36%;

	@media screen and (${breakpoints.pcFullRes}){
		width: 26%;
		top: ${({status})=> status ? '-36px' : '-28px'};
		left: -20px;
	}



`

export const PlanesBoton = styled(Button)`

	position: relative;

	z-index: 3;

	background-color: transparent;
	border: none;

	margin-left: 4%;
	margin-top: 8px;
		
	&>h2{
		font-size: calc(1.625rem + 0.9vw);
	}

	&:hover{
		background-color: transparent !important;
		border-color: transparent !important;
	}


`


export const MainContainer = styled(Container)`

	position: relative;
	background-image: linear-gradient(to right, #560b26, #780e33, #9b113e, #c01449, #e61952);
	min-height: 100vh;

	padding-top: 100px;

	@keyframes ArrAbaPelotas {

		0% {top: 0%}


		100% {top:38%}


	}


	.Bubbles{
		position: absolute;
		width: 30%;
    	left: 88%;
    	top: 15%;
		transform: scaleX(-1);
		animation-name: ArrAbaPelotas;
		animation-duration: 5s;
		animation-iteration-count: infinite;
		animation-direction: alternate;
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
	}

	.Cross{
		position absolute;

		width: 6%;

		bottom: 45%;

		left: 42%;

		transform: translateX(100%);
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
		max-width: none !important;
    	width: 196%;
    	height: 238%;
    	left: 0;
    	top: -79.5%;
    	transform: translateX(-23.4%);
    	z-index: 2;
	}

	.BlurInner{
		position: absolute;
		transform: translateX(-42%);
		width: 28%;
		top: 16%;
		left: 0;
		z-index: 1;
	}


`


export const InnerTitle = styled(Col)`

	z-index: 3;

	color: #FFF;

	font-size: 1.8rem;

	text-align: center;

	&>h3{
		margin: 20px 0;
	}



`