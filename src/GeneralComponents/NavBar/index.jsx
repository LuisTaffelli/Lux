import { useEffect, useState, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CgMenuLeft } from 'react-icons/cg';

import useShow from '../../Utils/Hooks/useShow';

import { links } from './Links';

import isLanding, {isSession}  from '../../Utils/isLanding';


import Menu from './Menu';
import Logo from './Logo';

import { Header, LogoContainer, Nav } from './NavbarElements';
// import Popup from '../Forms';
// import { userTrack } from '../../Redux/Actions/session';

/**
 * to change links modify Links.js file
 */
function Navbar({ state, toggle, SectionSetter }) {
  const landing = isLanding();
  // const dispatch = useDispatch();

  const BackgroundRef = useRef()


  const SessionNav = isSession()

  const [BgColor, setBgColor] = useState('transparent')


  const HandleColor = (event)=>{
    setBgColor('--primary-dark1')

    if(window.pageYOffset === 0){
      setBgColor('--transparent')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', HandleColor);
    return () => window.removeEventListener('scroll', HandleColor);

  }, []);

  const {
    state: statePopup,
    show: showPopup,
    hide: hidePopup,
  } = useShow(false);

  // const [search, setSearch] = useState('');

  // const onSearchChange = ({ target: { value } }) => {
  //   setSearch(value);
  // };

  // const onSearchSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(search);
  // };

  // useEffect(() => {
  //   dispatch(userTrack());
  //   return null;
  // }, [dispatch]);

  // const user = useSelector((store) => store.session);

  // const searchbar = user?.name ? (
  //   <Searchbar
  //     value={search}
  //     onSubmit={onSearchSubmit}
  //     onChange={onSearchChange}
  //   />
  // ) : null;


  if(SessionNav){
    return(
      
      <Header isLanding={landing}>
        <Nav isSession={SessionNav}>
          <button className="menu" onClick={toggle} type="button">
            <CgMenuLeft size={30} />
          </button>

          <LogoContainer>
            <Link className="logo-container" to="/">
              <Logo theme={landing ? 'dark' : 'light'} className="logo" />
            </Link>
          </LogoContainer>
        </Nav>
      </Header>
    )
  }

  return (
    <>
      <Header isLanding={landing} 
      ref={BackgroundRef} color={BgColor} 
      onScroll={HandleColor}>
        <Nav>
          <LogoContainer>
            <Link className="logo-container" to="/">
              <Logo theme={landing ? 'dark' : 'light'} className="logo" />
            </Link>
          </LogoContainer>
          <Menu
            links={links}
            togglePop={showPopup}
          />


        </Nav>
      </Header>

      {/* <Menu
        links={linksMobile}
        mobile
        // searchbar={searchbar}
        state={state}
        togglePop={showPopup}
        toggle={toggle}
        user={user}
      /> */}

      {/* {statePopup && !user?.name && <Popup close={hidePopup} />} */}
    </>
  );
}

export default Navbar;