import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoints } from '../../../Utils/breakpoints';

export const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  text-decoration: none;
  color: #FFF;
  font: normal normal 400 0.7rem Montserrat;
  font-weight: 500;
  letter-spacing: 1.9px;
  font-size: 1.2rem;
`;

export const MenuContainer = styled.ul`
  display: none;
  list-style: none;

  @media screen and (${breakpoints.pc}) {
    display: flex;
    align-items: center;
    gap: 1rem;

    margin: 0 3% 0 0;
    width: max-content;
  }
`;

export const LoginButton = styled.button`
  padding: 0.75rem 1.25rem;
  border-radius: 9999px;

  background: #000;
  color: #fff;
  font-weight: 500;
  font-size: 0.75rem;
  letter-spacing: 0.75px;
  text-transform: uppercase;

  transition: all 0.25s;

  :hover {
    background-color: #555;
  }
`;
