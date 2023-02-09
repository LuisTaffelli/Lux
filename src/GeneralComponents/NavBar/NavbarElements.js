import styled, { css } from 'styled-components';
import { breakpoints } from '../../Utils/breakpoints';

export const Header = styled.header`
  padding: 1rem 0;
  position: sticky;
  top: 0;
  left: 0;
  min-width: 100vw;

  z-index: 500;
  box-shadow: 0 0.5rem 0.75rem #0001;

  transition: all 0.7s ease-in;

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

    @media screen and (${breakpoints.pc}) {
      display: none;
    }
  }
`;


export const LogoContainer = styled.div`
  display: flex;

  align-items: center;
  margin-right: 12px;


`