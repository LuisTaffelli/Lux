import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoints } from '../../../Utils/breakpoints';

export const MobileMenu = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  transform: translate(-100%, 0);
  min-width: max-content;
  width: 60%;
  max-width: 325px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0 0 1rem #0004;

  padding: 1rem 0;

  transition: transform 0.25s ease;

  .avatar {
    margin: 2vh 0 5vh 0;
  }

  @media screen and (${breakpoints.pc}) {
    display: none;
  }

  ${({ show }) =>
    show
      ? css`
          transform: translate(0, 0);
        `
      : css`
          transform: translate(-100%, 0);
        `}
`;

export const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  padding: 0 1rem;

  .menu {
    display: block;
    margin: 0 0 0 auto;
  }
`;

export const MobileLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.25rem 0 0.25rem 0;

  gap: 0.75rem;

  margin: 0.75rem 0;
  text-decoration: none;
  font-size: 0.65rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: #666;

  .icon {
    color: #000;
    display: grid;
    place-items: center;
    height: 1.75rem;
    width: 1.75rem;
    border-radius: 100%;
    background-color: transparent;
    transition: all 0.25s ease;
  }

  :hover {
    color: #7fa646;
  }
  :hover .icon {
    background: #000;
    color: #7fa646;
  }
`;

export const LinksContainer = styled.ul`
  display: flex;
  flex-flow: column;
  height: max-conent;
  align-items: flex-start;
`;

export const BottomContainer = styled.ul`
  display: flex;
  flex-flow: column;
  height: max-conent;
  align-items: center;

  .logo-sm {
    width: 5rem;
    margin: 1.5rem;
  }

  .login-button {
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

export const BottomLink = styled(Link)`
  background-color: #fff;
  padding: 0.85rem;
  box-shadow: 0 0rem 0.5rem #0003;
  border-radius: 9999px;
  text-align: center;
  text-decoration: none;
  width: 100%;
  max-width: 200px;
  margin: 0.5rem auto;
  font-size: 0.7rem;
`;

export const MobileSearchbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85vw;
  margin: 0rem auto 1rem auto;
  padding: 1rem 0;
  background: #fff;

  @media screen and (${breakpoints.pc}) {
    display: none;
  }

  .shop {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    min-height: 2.75rem;
    min-width: 2.75rem;
    border-radius: 100%;

    :hover {
      background-color: #7fa646;
    }
  }
  .icon {
  }
`;
