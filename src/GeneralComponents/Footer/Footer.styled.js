import styled from 'styled-components';
import { breakpoints } from '../../Utils/breakpoints';

export const FooterContainer = styled.footer`
  display: flex;
  flex-flow: column;
  margin: 2rem 0 0 0;

  @media screen and (${breakpoints.pc}) {
    flex-flow: row;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 3rem;
`;

export const Logo = styled.img`
  width: 10rem;
`;

export const Follow = styled.div`
  p {
    position: relative;
    font-weight: 700;
    font-size: 0.95rem;
    padding: 0 0 0 3.5rem;
    margin: 1rem 0;

    ::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 3rem;
      height: 2px;
      background-color: #000;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    > * {
      width: 2rem;
      height: 2rem;
      cursor: pointer;
      padding: 0.25rem;
      transform: translateY(0);
      transition: transform 0.25s;

      :hover {
        transform: translateY(-2px);
      }
    }
  }
`;

export const Right = styled.div`
  padding: 3rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 2rem;
  background-color: #000;
  color: #fff;
  width: 100%;

  @media screen and (${breakpoints.pc}) {
    flex-flow: row;
    align-items: flex-start;
  }
`;

export const About = styled.div`
  font-size: 0.85rem;
  text-align: center;
  @media screen and (${breakpoints.pc}) {
    text-align: left;
  }

  ul > li {
    position: relative;
    margin: 0.5rem 0;
    cursor: pointer;
    text-align: center;
    text-decoration: underline;

    @media screen and (${breakpoints.pc}) {
      padding: 0 0 0 2.5rem;
      text-decoration: none;
      text-align: left;

      ::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 0.75rem;
        height: 1px;
        background-color: #fff;
        transition: width 0.25s;
      }
      :hover::after {
        width: 2rem;
      }
    }
  }
`;

export const Contact = styled.div`
  font-size: 0.85rem;
  text-align: center;

  @media screen and (${breakpoints.pc}) {
    text-align: left;
  }

  ul > li {
    position: relative;
    margin: 0.5rem 0;
    cursor: pointer;
    text-align: center;
    text-decoration: underline;

    @media screen and (${breakpoints.pc}) {
      padding: 0 0 0 2.5rem;
      text-decoration: none;
      text-align: left;

      ::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 0.75rem;
        height: 1px;
        background-color: #fff;
        transition: width 0.25s;
      }

      :hover::after {
        width: 2rem;
      }
    }
  }
`;

export const Title = styled.div`
  font-weight: 800;
  font-size: 1rem;
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  font-size: 0.75rem;

  background-color: #000;
  color: #fff;
`;
