import styled from 'styled-components'
import { breakpoints } from '../../../Utils/breakpoints';





export const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  font-size: 0.75rem;

  margin: 0 auto;

  color: #fff;
`;


export const FooterSection = styled.section`

    background-color: var(--primary-dark1);

    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 100vw;
    height: 100px;

    

    color: var(--secondary-dark);


    .IconsContainer{

        display: flex;

        justify-content: space-around;

        width: 10%;

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