import styled, { css } from 'styled-components';
import { breakpoints } from '../../Utils/breakpoints';
import Menu_Hambur from '../../Images/Menu_Hambur.svg';
import Menu_Close_Amarillo from '../../Images/Menu_Close_Amarillo.svg';

export const Header = styled.header`
  padding: 1rem 0;
  position: sticky;
  top: 0;
  left: 0;
  min-width: 100vw;

  z-index: 1002;
  box-shadow: 0 0.5rem 0.75rem #0001;

  transition: all 0.7s ease-in;

  .Icon{
    background: url(${props=> props.show ? 
    Menu_Close_Amarillo
    : 
    Menu_Hambur 
    });
    background-repeat: no-repeat;
    background-position: center;
    width: 40px;
    height: 40px;
  }

  ${({ isLanding, color }) =>
    isLanding
      ? css`
          background-color: var(${color});
          color: #00040E;
        `
      : css`
          background-color: var(--primary);
          color: #00040E;
        `}

  @media screen and (${breakpoints.ipad}) {
    box-shadow: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  width: 85vw;
  padding: 0 4% 0 6%;
  max-width: 99vw;
  margin: 0 auto;

  .logo-container {
    display: flex;
    margin: 0 auto;
    text-decoration:none;
    align-items: center;
  }
  .logo {
    position: relative;
    top: -4px;
    height: 100%;
    max-height: 32px;
    max-width: 260px;
    width: 100%;
  }

  @media screen and (${breakpoints.ipad}) {
    justify-content: flex-start;
    padding: 0 0 0 2%;
    .logo-container {
      width: 10rem;
    }
  }

  @media screen and (${breakpoints.pc}) {
    min-width: 99vw;

    .logo-container {
      margin: 0 auto;
      height: 48px;
    }
  }

  .menu {
    display: block;
    z-index: 1001;

    @media screen and (${breakpoints.pc}) {
      display: none;
    }
  }
`;


export const LogoContainer = styled.div`
  display: flex;

  align-items: center;
  margin-right: 12px;

  z-index: 1001;


  @media screen and (${breakpoints.ipad}) {
    margin-left: 18%;
  }

  @media screen and (${breakpoints.mobile}) {
    margin-left: 0;
  }


`