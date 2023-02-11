import styled from 'styled-components';
import {breakpoints} from '../../../Utils/breakpoints'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



export const MainContainer = styled.section`

	position: relative;
	background-color: #FFF;
	min-height: 400px;

	padding: 0 6% 20px 8%;



	padding-top: 100px;
	
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
`

export const MainWrapper = styled.div`

	display: grid;

	justify-items: center;
    align-items: center;

	margin-top: 72px;

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
	}

	.Title{
		font-weight: 700;
	}
	.SubTitle{
		font-weight: 600;
	}
	.Description{
		margin: 8px 0;
	}
	.Offers{
		font-weight: 600;
	}



	.MediaButtons{
		margin: 8px 0;
		display: flex;
		align-items: center;

		.WhatsappButton{
			background-color: #000;
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
		}
	}

	.ColorBox{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 400px;
		height: 220px;
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
		background: linear-gradient(to right, var(--complement-dregrade2), var(--complement-dregrade3));
	}


`


export const LeftContainer = styled.div`
	
	margin: 0 12px;

	.PackInfoPersonalizado{
		display: flex;
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
  		display: inline-block;
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

`

export const RightContainer = styled.div`
	margin: 0 12px;

	grid-column: 2;

	text-align: right;

	.MediaButtons{
		justify-content: flex-end;
	}
`

export const BottomLine = styled.div`

	background-color: #777;
	height: 1px;
	margin: 0 auto;


`