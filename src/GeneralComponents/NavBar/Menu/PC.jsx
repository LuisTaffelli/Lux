import { useContext, useEffect, useState, useRef } from "react"
import { useNavigate } from "react-router-dom";
import { WebSocketContext } from '../../../FooterProvider/Index';
import OnlyPC from '../../OnlyPC';
import Avatar from '../../Avatar';

import { MenuLink, MenuContainer } from './PCElements';
import isLanding from '../../../Utils/isLanding';
import { PrimaryButton } from '../../Buttons';

// Este menu es usado en el NavBar

function PC({ searchbar, links, user, togglePop, SectionSetter }) {
  const theme = isLanding();

  const Locations = useNavigate()

  const HandleAction = (anchorTo, link) => {

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
      <MenuContainer>
        {links?.map(({ to, label, anchorTo }, i) => (
          <li key={i}>
            <MenuLink 
            to={to}
            onClick={()=>HandleAction(anchorTo, to)}
            >{label}</MenuLink>


          </li>
        ))}
      </MenuContainer>
    </>
  );
}

export default PC;
