import { useEffect, useRef } from 'react';
import styled, {css} from 'styled-components';
import {breakpoints} from '../../Utils/breakpoints'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: calc((100% - 550px) / 2);
  width: 600px;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: #FFFF;
  z-index: 480;
  transition: all 0.25s;

  @media screen and (${breakpoints.mobile}){
    left: 0;
    width: 100%;

    padding: 0 20px;

    font-size: 14px;

  }
`;

const themes = {
  top: css`
    top: 160px;
    height: 80%;
    @media screen and (${breakpoints.ipad}){
      top: 50px;
    }
  `,
}

const Element = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: #FFFF;
  z-index: 480;
  transition: all 0.25s;
`;

export default function blankScreen({children, sector}) {

  const themeStyles = themes[sector]

  const Component = styled(Element)`
      ${themeStyles}
  `;

  return (
    <Component>
      <Container>
          {children}
      </Container>
    </Component>
  )
}
