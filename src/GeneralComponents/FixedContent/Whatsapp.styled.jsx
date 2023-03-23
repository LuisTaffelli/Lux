import styled from 'styled-components';





export const LinkWhatsapp = styled.a`

	position: fixed;
    overflow: hidden;
    cursor: pointer;
    max-width: 65px;
    bottom: 10%;
    left: 90%;

    z-index: 999999999999999;

    &>img{
    	width: 4rem;
    }



    @media screen and (max-width: 428px){
        left: 80%;
    }



`