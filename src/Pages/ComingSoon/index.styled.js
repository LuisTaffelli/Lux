import styled from 'styled-components';
import FaceOpen from './Images/Carita_abierta.svg'
import FaceClosed from './Images/Carita_cerrada.svg'



export const AnimatedImage = styled.div`

	@keyframes ChangeFace{
		15% {
			background: url(${FaceOpen}) no-repeat; 
		}

		25% {
			background: url(${FaceClosed}) no-repeat;
			background-size: 100% 88.5%;
		}

		40% {
			background: url(${FaceOpen}) no-repeat; 
		}

		100% {
			background: url(${FaceOpen}) no-repeat; 
		}
	}

	background-image: url(${FaceOpen});
	background-repeat: no-repeat;

	margin: 0;
	padding: 0;

	width: 120px;
	height: 120px;

	transition: background 0.2s linear;

	animation-name: ChangeFace;
	animation-duration: 7s;
	animation-iteration-count: infinite;
	animation-timing-function: none;

`

export const Container = styled.section`


	display: flex;

	flex-direction: column;

	justify-content: center;

	align-items: center;



	&>p{
		margin: 20px;
		color: #FFF;
		font-weight: 800;
		font-style: italic;
		font-size: calc(1.775rem + 1.5vw);
	}

	.Logo{
		width: 40px;
		height: 40px;
		position: absolute;
		bottom: 180px;

	}

`