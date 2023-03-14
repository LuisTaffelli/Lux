import { useEffect, useState } from 'react';
import styled, {css} from 'styled-components';
import { breakpoints } from '../../../Utils/breakpoints';


const baseStylesMiddle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 2;

  height: 140px;

  font-family: Raleway;
  font-size: 1.4em;

  letter-spacing: 0.15em;
  text-align: center;
  text-transform: uppercase;

  color: #fff;

  transition: all 0.25s;

  .InnerMiddle{
    padding-right: 40px;
    min-width: 52px;
    min-height: 40px;
    max-width: 104px;
    max-height: 80px;
  }


  @media screen and (${breakpoints.ipad}){

    font-size: 0.7rem;

    margin: 0 3%;
    
    width: max-content;

    .InnerMiddle{
      padding-right: 0;
      max-width: 32px;
      min-width: 20px;
    }


  }


`;


const themes = {


  DB: css`
    background-color: var(--secondary);
    color: #FFF;
  `,
  
  LB: css`
    background-color: var(--secondary);
    color: #FFF
  
  `,
  DC: css`
    background-color: var(--secondary);
    color: #fff;
  
  `,
  LC: css`
    background-color: var(--secondary);
    color: #fff;
  
  `,
};




export const Main = styled.main`
  margin: 0;
  position: relative;
  background-color: #FFF;
`;

export const Intro = styled.section`
  display: flex;
  width: 95vw;

  max-width: 80rem;
  margin: 0 auto 5rem auto;
  align-items: flex-start;
  justify-content: center;
  gap: 8vw;

  @media screen and (${breakpoints.pc}) {
    width: 75vw;
    max-width: 90rem;
  }
`;

export const Bottom = styled.section`
  display: flex;
  width: 95vw;

  max-width: 80rem;
  margin: 160px 0 5rem 17vw;
  align-items: flex-start;
  gap: 8vw;

  @media screen and (${breakpoints.pc}) {
    width: 75vw;
    max-width: 90rem;
  }

  @media screen and (${breakpoints.ipad}) {
    

    margin: 72px 0 5rem 4vw;

    
  }
`;

export const HeroImage = styled.img`

  width: 100%;
  min-width: 35%;
  height: 125%;
  object-fit: cover;
  object-position: center;

  @media screen and (${breakpoints.pc}) {
    min-width: 35%;
  }

  @media screen and (${breakpoints.ipad}) {
    

    height: 89%;
    
  }
`;

export const BottomIcons = styled.div`

  position: relative;

  display: flex;

  width: 24vw;

  height: 640px;

  margin: 0 20px 0 0;
  

  @media screen and (${breakpoints.ipad}){
    

  }

  @media screen and (${breakpoints.mobile}){
    

  }

`
export const Inscription = styled.section`

  position: relative;

  font-size: 1.4em;

  padding-left: 76px;

  width: 85vw;
  height: 316px;
  margin: 160px 0 10rem 6.5vw;


  display: flex;
  flex-direction: column;
  justify-content: center;

  color: #FFF;

  .BackgroundInscription{
    position: absolute;
    width: 90.5%;
  }


  .Title{

    position: relative;

    top: 20px;

    z-index: 2;

    padding: 32px 0 0 60px;

    color: var(--secondary-dark);

    h4{
      font-size: 34px;
      color: #FFF;
    }

  }

  .SubTitle{

    z-index: 2;
    padding: 24px 0 0 60px;

    color: var(--secondary-dark);
  }

  .BtLine{

    z-index: 2;

    position: absolute;

    bottom: -152px;

    left: -10%;

  }

  .BtLineUpper{

    z-index: 2;

    position: absolute;

    top: -44px;

    right: -10%;

  }

  .InContainer{

    z-index: 2;

    position: relative;

    width: 480px;
    height: 44px;

    margin: 20px 0 0 0;

    input{
      width: 100%;
      height: 44px;

      margin: 0 0 0 60px;

      border-radius: 999999px;
      padding-left: 40px;

      border: none
    }

    .btn-inscription{

      z-index: 2;
      position: absolute;

      max-width: 156px;
      max-height: 44px;

      top:0;

      right: -64px;


    }

  }

  @media screen and (${breakpoints.ipad}){
    padding-left: 0;
    margin-top: 40px;


    .BackgroundInscription{
      width: 103%;
    }

    .Title{
      &>h4, h3{
        font-size: 1.4rem;
      }
    }

    .SubTitle{
      font-size: 1rem;
    }

    .BtLine{

      bottom: 0;
      
      left: -10%;
      
      width: 60%;

    }

    .BtLineUpper{

      
      top: 48px;
      
      right: -5%;
      
      width: 48%;

      transform: rotate(352deg)

    }

    .InContainer{

    width: 480px;
    height: 44px;

    margin: 2px 0 0 0;

    input{
      width: 60%;
      height: 32px;

      margin: 0 0 0 60px;
    }

    .btn-inscription{

      max-width: 86px;
      max-height: 44px;

      font-size: .64rem;

      top:0;

      right: 114px;


    }


  }

  @media screen and (${breakpoints.mobile}){
    padding-left: 0;

    margin-top: 40px;

    margin-left: 1vw;

    overflow: hidden;


    .BackgroundInscription{
      width: 135%;
    }

    .Title{
      &>h4, h3{
        font-size: 1rem;
      }
    }

    .SubTitle{
      font-size: .7rem;
    }

    .BtLine{

      bottom: 65px;
      
      left: -10%;
      
      width: 65%;

    }

    .BtLineUpper{

      
      top: 83px;
      
      right: -12%;
      
      width: 60%;

      transform: rotate(352deg)

    }

    .InContainer{

    width: 100%;
    height: 44px;

    margin: 2px 0 0 40px;

    input{
      width: 60%;
      height: 32px;
      padding-left: 4px;
      margin: 0 0 0 12px;
    }

    .btn-inscription{

      max-width: 86px;
      max-height: 44px;

      font-size: .64rem;

      top:0;

      right: 82px;


    }


  }


`

export const LandingHeader = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: column;
  gap: 0.75rem;
  text-align: left;

  font-size: 1rem;


  .TopHeader{
    font-size: 40px;
    color: var(--secondary-dark);
  }

  .TopHeaderBottom{
    font-size: 24px;
  }
  

  .BlueTitle{
    color: var(--light-blue);
  }

  .Cropped{
    max-width: 340px;
    font-size: 0.6em !important;
  }

  h4 {
    color: rgb(0, 0, 0, .7);
    font-weight: 300;
    letter-spacing: 1px;
    font-size: 0.8em;
  }
  h3 {
    font-size: 1.15em;
    font-weight: 600;
    overflow-y: hidden;
  }
  p {
    font-size: 0.75em;
    margin: 0 0 1rem 0;
  }

  .WomanBottom{
    position: relative;
    right: -35%;

  }


  @media screen and (${breakpoints.ipad}) {
    .TopHeader{
      font-size: 1.4rem;
    }

    .TopHeaderBottom{
      font-size: 1.2rem;
    }

    .Cropped{
      max-width: 40%;
      font-size: 1em !important;
    }

    .WomanBottom{
      right: -26%;

      &>img{
        width: 70%;
      }
    }

  }

  @media screen and (${breakpoints.mobile}){

    .WomanBottom{
      right: 1%;
    }
  }
  


  @media screen and (${breakpoints.pc}) {
    font-size: 1.5rem;
  }

  div {
    font-size: 1.5rem;
  }
  .btn {
    font-size: 0.75rem;
    margin: 0.5rem 0 0 0;
    width: max-content;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 0 0 auto;
  overflow-x: scroll;
  scrollbar-width: none;

  @media screen and (${breakpoints.pc}) {
    max-width: 90rem;
  }
`;

export const Middle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-top: 240px;
  font-weight: 800;
  font-size: 0.5rem;

  @media screen and (${breakpoints.pc}) {
    font-size: 0.75rem;
  }

  @media screen and (${breakpoints.ipad}) {
    justify-content: flex-start;
    background-color: var(--secondary);
    width: 100%;

    margin-top: 40px;
  }

  @media screen and (${breakpoints.ipad}) {
    justify-content: space-around;

    flex-wrap: wrap;

    margin-top: 40px;
  }

`;

export function InnerMiddleBar({ as, children, theme, ...props }) {
  const [Div, setDiv] = useState(null);
  const themeStyles = themes[theme] || '';

  useEffect(() => {
    if (!as) {
      const Component = styled.div`
        ${baseStylesMiddle}
        ${themeStyles}
      `;

      return setDiv(Component);
    }

    if (typeof as === 'string') {
      const Component = styled[as]`
        ${baseStylesMiddle}
        ${themeStyles}
      `;
      return setDiv(Component);
    }

    const Component = styled(as)`
      ${baseStylesMiddle}
      ${themeStyles}
    `;

    return setDiv(Component);
  }, [as]);

  return Div ? <Div {...props}>{children}</Div> : null;
}
