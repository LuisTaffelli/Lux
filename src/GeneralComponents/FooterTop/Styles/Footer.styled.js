import styled from 'styled-components'
import { breakpoints } from '../../../Utils/breakpoints';








export const FooterSection = styled.section`

    background-color: var(--primary-dark1);

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    max-width: 100vw;
    height: 100px;

    

    color: var(--secondary-dark);


    .IconsContainer{

        display: flex;

        justify-content: space-around;

        width: 10%;

        padding-top: 16px;

        max-height: 100px;

        margin-right: 10%;



        .IgIcon,
        .WspIcon,
        .MailIcon{
            width: 32px;
            height: 32px;
        }
    }

    .Text{
        align-self: center;

        font-size: 1.4rem;
        
        text-transform: uppercase;
    }

    .Button{

        align-self: center;
        margin-top: 20px;
        margin-right: 34.8%;
        width: 80px;

    }

    @media screen and (${breakpoints.pcFullRes}){

        .Button{

            margin-right: 22.6%;
            width: 80px;

        }
    }

    @media screen and (${breakpoints.ipad}){
        
        display: block;
        background-size: cover;
        

        color: #FFF;

        .IconsContainer{
            width: 90%;
            justify-content: flex-end;

            &>*{
                margin: 0 8px;
            }
        }

        .Text{

            padding: 6% 0 0 30%;

            font-size: 12px;

            text-transform: uppercase;
        }

        .Button{

            font-size: 12px;
            height: 40px;
            width: 72px;
            margin: 8px 0 0 29%;
        }
    }

`