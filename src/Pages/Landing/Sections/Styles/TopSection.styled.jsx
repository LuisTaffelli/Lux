import styled from 'styled-components';





export const MainContainer = styled.section`

	position: relative;
	background-color: var(--primary);
	min-height: 900px;

	display: flex;

	align-items: center;


	.Bubbles{
		position: absolute;
		width: 20%;
		left: 10%;
	}

	.RightBottomCorner{
		position: absolute;
		width: 17%;
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

		width: 8%;

		bottom: 8%;

		left: 38%;

		transform: translateX(100%);
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

	.BlurTL{
		position: absolute;
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


export const InnerTitle = styled.div`

	z-index: 3;

	color: #FFF;

	font-size: 1.8rem;

	text-align: center;

	&>h3{
		margin: 20px 0;
	}



`