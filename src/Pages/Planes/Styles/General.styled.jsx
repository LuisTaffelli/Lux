import styled from 'styled-components';
import {breakpoints} from '../../../Utils/breakpoints'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import WhatsappIcon from '../../../Images/wsp_boton.svg';
import WhatsappIconHover from '../../../Images/wsp_boton_oscuro.svg';

export const MainContainer = styled.section`
	position: relative;
	background-color: ${({Status})=> Status === 'Colored' ? '#E2E2E2' : '#FFF'};
	min-height: 400px;

	padding: 0 8% 20px 8%;



	padding-top: 80px;
	
	.RightCorner{
		position: absolute;
		width: 20%;
		right: 0;
		top: 0;
	}

	.Bubbles{
		position: absolute;
		width: 12%;
    	right: 15%;
    	top: 15%;
	}

	.Luxed{
		color: var(--primary);
	}

	@media screen and (${breakpoints.ipad}){
		height: max-content;
	}

	@media screen and (${breakpoints.pcFullRes}){
		padding-top: 200px;
	}

`

export const MainWrapper = styled.div`

	display: grid;

	grid-template-columns: 50% 50%;

	justify-items: ${props=>props.position === 'Right' ? 'flex-start' : 'flex-end'};
    align-items: center;

	margin-bottom: 20px;

	.ExtrasContainer{
		display: flex;
		flex-direction: column;
		margin: 8px 0;
		&>*{
			margin: 2px 0;
		}
	}
	.GreyInfo{
		margin: 8px 0;
		color: #777;
		font-family: 'Poppins';
	}

	.Title{
		font-weight: 500;
		&>.Luxed{
			font-weight: 600 !important;
		}
	}
	.SubTitle{
		font-weight: 600;
	}
	.Description{
		font-family: 'Poppins';
		margin: 8px 0;
	}
	.Offers{
		font-family: 'Poppins';
		font-weight: 600;
	}



	.MediaButtons{
		margin: ${props=>props.position === 'Right' ? 
			'8px 0 8px auto' 
			
			:
			
			'8px auto 8px 0'
		};
		display: flex;
		align-items: center;
		grid-column: 1 / 3;

		.WhatsappButton{
			border-radius: 99999px;
			width: 40px;
			height: 40px;
			display: flex;
			margin: 0 8px;
			align-items: center;
			justify-content: center;
		}

		.WhatsappIcon{
			width: 28px;
			height: 28px;
			background: url(${WhatsappIcon});
			transition: background ease-in .3s;

			&:hover{
				background: url(${WhatsappIconHover});
			}
		}
	}

	.ColorBox{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 400px;
		height: 220px;
		max-width: 100%;
		background-color: var(--primary);
		border-radius: 12px;

		.Arrow{
			width: 100px;
			height: 120px;
			background-color: #FFF;
			clip-path:  polygon(0 10%, 0 90%, 100% 50%);
		}
	}

	.TextButton{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 120px;
		height: 40px;
		border-radius: 80px;
		background: linear-gradient(to right, var(--primary-dark1), var(--primary));
		color: #FFF;

		&:hover{
			background: var(--complement-dregrade3);
			color: var(--dark);
		}
	}

	@media screen and (${breakpoints.ipad}){
		.ColorBox{
			width: 100%;
			height: 240px
		}
		.MediaButtons{
			margin-left: 28px;
		}
	}

	@media screen and (${breakpoints.pcFullRes}){
		display: flex;
		flex-wrap: wrap;
		flex: 0 1 49%;
		align-items: unset;

		justify-content: unset;
		.ColorBox{
			margin: auto;
		}
	}

	&>*{
		margin: 8px 0;
	}

`


export const LeftContainer = styled.div`
	
	margin: auto;

	max-width: 100%;

	&>*{
		margin: 8px 0;
	}

	.PackInfoPersonalizado{
		display: flex;
		font-family: 'Poppins';
	}

	.PersonalizadoLeft{
		display: flex;
		flex-direction: column;
	}

	.PersonalizadoRight{
		display: flex;
		flex-direction: column;
		margin-left: 12px;
	}

	.CustomCheckbox{
  		position: relative;
  		display: flex;
  		padding: 0 6px;
  		margin: 10px 0;

  		&>input{
  			border: transparent;
  			outline: transparent;
  			margin-right: 8px;
  			appearance: none;
  		}

		&>input:after {
        	width: 15px;
        	height: 15px;
        	border-radius: 15px;
        	top: 0px;
        	left: 0px;
        	position: relative;
        	background-color: #FFF;
        	content: '';
        	display: inline-block;
        	visibility: visible;
        	border: 2px solid var(--primary);
    	}

    	&>input:checked:after {
    	    width: 15px;
    	    height: 15px;
    	    border-radius: 15px;
    	    top: 0px;
    	    left: 0px;
    	    position: relative;
    	    background-color: var(--primary);
    	    content: '';
    	    display: inline-block;
    	    visibility: visible;
    	    border: 2px solid var(--primary);
    	}

	}

	@media screen and (${breakpoints.ipad}){
		width: 94%;
		grid-column: 1 / 3;
		grid-row: ${props=>props.position === "Right" ? 
			'2' : '1'
		};
	}

	@media screen and (${breakpoints.pcFullRes}){
		max-width: 47%;
		width: 50%;

		.ColorBox{
			margin: 0 0 0 10% !important;
		}
	}

`

export const RightContainer = styled.div`

	max-width: 100%;
	margin: auto;

	text-align: right;

	&>*{
		margin: 8px 0;
	}

	.MediaButtons{
		justify-content: flex-end;
	}

	.PackInfoPersonalizado{
		display: flex;
		font-family: 'Poppins';
	}

	.PersonalizadoLeft{
		display: flex;
		flex-direction: column;
	}

	.PersonalizadoRight{
		display: flex;
		flex-direction: column;
		margin-left: 12px;
	}

	.CustomCheckbox{
  		position: relative;
  		display: flex;
  		padding: 0 6px;
  		margin: 10px 0;

  		&>input{
  			border: transparent;
  			outline: transparent;
  			margin-right: 8px;
  			appearance: none;
  		}

		&>input:after {
        	width: 15px;
        	height: 15px;
        	border-radius: 15px;
        	top: 0px;
        	left: 0px;
        	position: relative;
        	background-color: #FFF;
        	content: '';
        	display: inline-block;
        	visibility: visible;
        	border: 2px solid var(--primary);
    	}

    	&>input:checked:after {
    	    width: 15px;
    	    height: 15px;
    	    border-radius: 15px;
    	    top: 0px;
    	    left: 0px;
    	    position: relative;
    	    background-color: var(--primary);
    	    content: '';
    	    display: inline-block;
    	    visibility: visible;
    	    border: 2px solid var(--primary);
    	}

	}

	@media screen and (${breakpoints.ipad}){
		width: 94%;
		grid-column: 1 / 3;
	}

	@media screen and (${breakpoints.pcFullRes}){
		max-width: 49%;
		width: 50%;

		.ColorBox{
			margin: 0 auto;
		}
	}
`

export const BottomLine = styled.div`

	background-color: #777;
	height: 1px;
	margin: 0 auto;


`