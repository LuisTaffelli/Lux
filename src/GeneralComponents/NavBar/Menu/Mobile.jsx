import { useContext, useEffect, useState, useRef } from "react"
import { useNavigate } from "react-router-dom";
import { WebSocketContext } from '../../../FooterProvider/Index';

import { GrClose } from 'react-icons/gr';

import Avatar from '../../Avatar/index';



import Logo from '../Logo';

import {
  MobileMenu,
  Container,
  BottomLink,
  MobileSearchbar,
  MobileLink,
  LinksContainer,
  BottomContainer,
  Decoration
} from './MobileElements';
import { LoginButton } from './PCElements';

function Mobile({ searchbar, links, state, user, toggle, togglePop, SectionSetter }) {

  const Locations = useNavigate()

  const HandleAction = (anchorTo, link) => {
    toggle();

    if(anchorTo === 'Contacto'){
      SectionSetter(anchorTo);
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
      return null
    }

    if(!link){
      return null
    }

    SectionSetter(anchorTo);
    Locations(link);
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
  };

  return (
    <>
      <button className="menu" onClick={toggle} type="button">
        <div className="Icon" />
      </button>
      <MobileMenu show={state}>
        <Decoration />
        <Container>
          {/* Middle buttons */}
          <LinksContainer>
            {links?.map(({ to, label, anchorTo }, i) => (
              <MobileLink className="fs-1" 
              to={to}
              onClick={()=>HandleAction(anchorTo, to)}
              key={i}>
                {label}
              </MobileLink>
            ))}
          </LinksContainer>
            {/* <BottomLink to="/mode">Cambiar a modo instructor</BottomLink> */}
        </Container>
      </MobileMenu>

      {/* <MobileSearchbar>
        {searchbar}
        <div className="shop">
          <img src="/images/Mobile/chart.png" alt="" />
        </div>
      </MobileSearchbar> */}
    </>
  );
}

export default Mobile;
