import styled from 'styled-components';
import BackgroundImage from '../../../Images/Footer_degradado.svg';
import {breakpoints} from '../../../Utils/breakpoints'



export const MainContainer = styled.section`

	position: relative;
	background: var(--dark);
	min-height: 400px;

	background-size: cover;

	display: flex;

	align-items: flex-start;


	.RightBottomCorner{
		position: absolute;
		width: 13%;
		top: 0;
		right:0;
	}

	@media screen and (${breakpoints.ipad}){
		flex-direction: column;
		padding-bottom: 16px;
	}

	@media screen and (${breakpoints.mobile}){
		background-size: contain;
	}

`
export const TextContainer = styled.div`
		
	display: flex;

	flex-direction: column;

	margin: 6% 0 0 10%;

	align-items: flex-end;

	width: 20vw;

	.Text{

		padding-top: 4px;

		padding-left: 8px;

		resize: none;

		width: 120%;

		border-radius: 12px;

		border: none;

		outline: none;

		height: 200px;
	}


	@media screen and (${breakpoints.ipad}){
		width: 60%;

		margin-left: 14%;

		align-items: flex-start;

		.Text{
			width: 100%;
		}

	}

`

export const SendButton = styled.button`

	color: var(--primary);

	display: flex;

	align-items: center;

	justify-content: center;

	background-color: #FFF;

	font-weight: 600;

	margin-top: 8px;

	height: 24px;

	width: 96px;

	border-radius: 24px;

	&:hover{
		background-color: var(--primary);
		color: #FFF;
	}

`

export const TitleContainer = styled.div`

	position: relative;

	z-index: 2;

	margin:0 auto 80px auto;

	border-radius: 24px;

	justify-content: center;

	width: 55%;

	height: 400px;

	display: flex;

	align-items: center;


`


export const InputsContainer = styled.div`
	
	display: flex;

	flex-direction: column;

	margin: 4% 0 0 14%;

	@media screen and (${breakpoints.ipad}){
		width: 60%;
	}


`

export const TopInput = styled.div`
	
	display: flex;

	flex-direction: column;

	width: 30vw;

	&>p{
		color: #FFF;
		font-size: 18px;
		font-weight: 600;
		margin: 0 0 16px 0;
	}

	.Selector{
		border-radius: 999999px;
	}

	@media screen and (${breakpoints.ipad}){
		width: unset;
	}



`

export const EmailInput = styled.div`
	
	display: flex;

	flex-direction: column;

	margin-top: 32px;

	&>p{
		margin-top: 8px;
		padding-left: 12px;
		font-size: 14px;
		color: #FFF;
	}

	.InputMail{
		outline: none;
		border: none;

		padding-left: 12px;

		border-radius: 80px;
		height: 38px;
	}



`


export const InnerTitle = styled.div`

	z-index: 3;

	color: #FFF;

	font-size: 1.8rem;

	text-align: center;

	&>h3{
		margin: 20px 0;
	}



`