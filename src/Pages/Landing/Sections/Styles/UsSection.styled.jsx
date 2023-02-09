import styled from 'styled-components';


export const PlanesContainer = styled.div`

	display: flex;

	flex-direction: column;


	&>button{
		color: var(--primary);
		width: 80%;
    	margin: 40px 0 40px 6%;
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

	margin: 60px 0 0 6%;

	width: 55%;

	display: flex;

	flex-direction: column;

	color: var(--primary);

	font-size: 32px;

	&:after{
		content: "";
		position: absolute;
		height: 3px;
		left: 0;
		bottom: -26px;
		width: 26%;
		background-color: var(--primary);
	}


`


export const TopDescriptionContainer = styled.div`

	color: #232A31;

	width: 70%;

	text-align: left;

	margin: 40px 0 0 6%;

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

	margin: 40px 0 0 6%;

	display: flex;

	justify-content: space-around;



`



export const InnerCard = styled.div`

	display: flex;

	flex-direction: column;

	align-items: center;

	box-shadow: 0 0.5rem 2rem var(--primary);

	border-radius: 24px;

	height: 400px;

	width: 25%;


	&>h3{
		margin-top: 20px;
		color: var(--primary);
	}



`