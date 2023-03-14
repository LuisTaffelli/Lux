import styled from 'styled-components';
import {breakpoints} from '../../../../Utils/breakpoints'




export const MainContainer = styled.section`

	position: relative;

	background-color: #FFF;
	min-height: 740px;

	display: flex;
	flex-direction: column;

	.LeftCorner{
		position: absolute;
		width: 16%;
		left: 0;
		top: 0;

	}


	.Bubbles{
		position: absolute;
		width: 20%;
		left: 10%;
	}

	.RightTopCorner{
		position: absolute;
		width: 18%;
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
		width: 6%;
		bottom: 0;
		left: 2%;
	}



`


export const TopTitleContainer = styled.div`

	position: relative;

	margin: 60px 0 0 8%;

	width: 80%;

	display: flex;

	flex-direction: column;

	color: var(--primary);

	font-size: 38px;
	text-align: right;

	&>h2{
		font-weight: 600;
		font-size: calc(1.325rem + 1.9vw);
	}

	&>h2::after{
		content: '';
		position: absolute;
		bottom: 0;
		right: 0;
		width: 20%;
		align-content: flex-end;
		background-color: #E61952;
		height: 2px;
	}


`


export const TopDescriptionContainer = styled.div`

	color: #232A31;

	width: 70%;

	text-align: left;

	margin: 40px 0 0 4%;

	font-size: 1.2rem;

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

	margin: 60px 6% 0 0;

	width: 80%;

	display: flex;

	flex-direction: column;

	color: var(--primary);

	font-size: 32px;


	text-align: right;

	&:after{
		content: "";
		position: absolute;
		height: 3px;
		right: 0;
		bottom: -26px;
		width: 20%;
		background-color: var(--primary);
	}



`

export const BottomDescriptionContainer = styled.div`


	color: #232A31;

	width: 80%;

	text-align: right;

	margin: 40px 6% 0 0;

	font-size: 1.2rem;


`


export const CardsContainer = styled.div`
	
	width: 80%;

	margin: 40px auto 40px;

	display: flex;

	justify-content: space-around;

	flex-wrap: wrap;

	@media screen and (${breakpoints.pc}){
		flex-wrap: no-wrap;
		margin: 40px auto 0;
	}

	

`



export const InnerCard = styled.div`

	display: flex;

	flex-direction: column;

	align-items: center;

	box-shadow: -10px 3px 1rem 0px rgba(230, 25, 82, .5);

	border-radius: 24px;

	margin: 8px auto;

	margin-left: 3.2%;

	height: 500px;

	width: 42%;

	@media screen and (${breakpoints.mobile}){
		width: 80%;
	}



	@media screen and (${breakpoints.pc}){
		width: 20%;
	}


	&>img{
		margin-top: 20px;
		width: 40%;
		padding-top: 16px;
	}

	.CM{
		width: 56%;	
	}

	&>p{
		min-height: 120px;

		@media screen and (${breakpoints.pcFullRes}){
			min-height: 80px;
		}
	}

	&>p, h5{
		width: 80%;
		text-align: left;
		margin: 8px 0;

		font-family: 'Poppins';


		@media screen and (${breakpoints.mobile}){
			text-align: left;
			width: 80%;
		}
	}

	&>h5{
		width: 80%;
		text-align: left;
		font-weight: 700;
		font-size: calc(0.525rem + .6vw);

		@media screen and (${breakpoints.mobile}){
			font-size: calc(0.725rem + .9vw);
		}

		@media screen and (${breakpoints.ipad}){
			font-size: calc(0.625rem + .9vw);
		}

		@media screen and (${breakpoints.pc}){
			font-size: calc(0.325rem + .6vw);
		}
	}

	&>h3{
		margin-top: 20px;
		min-height: 66px;
		text-align: center;
		color: var(--primary);
	}


	@media screen and (${breakpoints.ipad}){
		width: 80%;

		&>.CM{
			width: 30%;
		}

		&>img{
			width: 20%;
		}
	}
`