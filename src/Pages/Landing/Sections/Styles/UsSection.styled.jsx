import styled from 'styled-components';
import {breakpoints} from '../../../../Utils/breakpoints'


export const PlanesContainer = styled.div`

	display: flex;

	flex-direction: column;

	& a{
		transition: color ease-in .5s;

		&>h2{
			transition: font-size ease-in .5s;
		}
	}

	&>button{
		color: var(--primary);
		width: 80%;
    	margin: 40px auto 40px;
	}

	& a:hover{
		color: var(--primary-dark1);
		&>h2{
			font-size: calc(1.525rem + 0.9vw)
		}
	}

`




export const MainContainer = styled.section`

	position: relative;

	background-color: #FFF;
	min-height: 900px;

	padding-bottom: 40px;

	display: flex;
	flex-direction: column;


	.Bubbles{
		position: absolute;
		width: 20%;
		left: 10%;
	}

	.RightTopCorner{
		position: absolute;
		width: 21.22%;
		top: 0;
		right:0;
	}

	.RightDots,
	.BottomDots{
		position: absolute;
		z-index: 3;
	}

	.RightDots{
		width: 2%;
		right: 10%;
		top: 28%;
	}
	.BottomDots{
		width: 8%;
		bottom: -228px;
		left: 0;
	}



`


export const TopTitleContainer = styled.div`

	position: relative;

	margin: 80px auto 0 9%;

	width: 55%;

	display: flex;

	flex-direction: column;

	color: var(--primary);

	font-size: 32px;

	&>h2{
		font-weight: 600;
	}

	&:after{
		content: "";
		position: absolute;
		height: 3px;
		left: 0;
		bottom: 0;
		width: 26%;
		background-color: var(--primary);
	}


`


export const TopDescriptionContainer = styled.div`

	color: #232A31;

	width: 70%;

	text-align: left;

	margin: 40px auto 0 9%;

	font-size: 1.2rem;

	font-family: 'Poppins';

	.FlexedRow{
		display: flex;
	}

	.Colored{
		margin-left: 4px;
		color: var(--primary);
	}


`


export const BottomTitleContainer = styled.div`
	
	position: relative;

	margin: 60px 0 0 6%;

	width: 80%;

	display: flex;

	flex-direction: column;

	color: var(--primary);

	font-size: 32px;

	text-align: right;

	&>h2{
		font-weight: 600;
	}

	&:after{
		content: "";
		position: absolute;
		height: 3px;
		right: 0;
		bottom: 0;
		width: 20%;
		background-color: var(--primary);
	}



`

export const BottomDescriptionContainer = styled.div`


	color: #232A31;

	width: 80%;

	text-align: right;

	margin: 40px 0 0 6%;

	font-size: 1.2rem;

	font-family: 'Poppins';

`


export const CardsContainer = styled.div`
	
	width: 80%;

	margin: 40px auto 0;

	display: flex;

	justify-content: space-around;

	flex-wrap: wrap;

	@media screen and (${breakpoints.pc}){
		flex-wrap: no-wrap;
	}

`



export const InnerCard = styled.div`

	display: flex;

	flex-direction: column;

	align-items: center;

	box-shadow: -10px 3px 1rem 0px rgba(230, 25, 82, .5);

	border-radius: 32px;

	height: 600px;

	width: 90%;

	margin: 12px 0;

	transition: transform ease-in 0.6s;


	&:hover{
		background: var(--gradient1);
		color: #FFF;

		transform: scale(1.1);

		&>h2{
			color: #FFF !important;
		} 
	}

	&>h2{
		margin-top: 20px;
		color: var(--primary);
		font-weight: 600;
		font-family: 'Poppins';
		@media screen and (${breakpoints.pc}){
			font-size: calc(1.125rem + 0.9vw);
			text-align: center;
		}
		@media screen and (${breakpoints.pcFullRes}){
			font-size: calc(1.425rem + 0.9vw);
			text-align: center;
		}
	}

	&>h5{
		width: 70%;
		margin: 40px 0;
		font-size: 14px;
		text-align: left;
		@media screen and (${breakpoints.ipad}){
			font-size: 18px;
		}
		@media screen and (${breakpoints.mobile}){
			font-size: 14px;
		}
		@media screen and (${breakpoints.pcFullRes}){
			font-size: calc(0.125rem + 0.9vw);
			text-align: center;
		}
	}

	@media screen and (${breakpoints.mobile}){
		width: 90%;
		margin: 12px 0; 
	}

	@media screen and (${breakpoints.pc}){
		width: 25%;
	}


`