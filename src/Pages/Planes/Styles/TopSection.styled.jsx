import styled from 'styled-components';
import {breakpoints} from '../../../Utils/breakpoints'


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


export const MainContainer = styled.section`

	position: relative;
	background-color: var(--primary);
	min-height: 400px;

	padding: 0 16%;

	padding-top: 100px;

	color: var(--complement-dregrade3);

	.Bubbles{
		position: absolute;
		width: 12%;
    	right: 15%;
    	top: 15%;
	}

	.Decoration{
		position: absolute;
		width: 40px;
		right: 5%;
		bottom: 0;

	}

	.Title{
		font-weight: 700;
	}

	.Description{
		margin-top: 20px;
		font-weight: 400;
	}

	@media screen and (${breakpoints.ipad}){
		padding: 60px 18% 0 6%;
		padding-top: 60px;
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