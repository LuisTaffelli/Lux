import Mobile from './Menu/Mobile';
import PC from './Menu/PC';

// Menu dinámico para renderizado de pc o mobile

function Menu({ user, links, state, toggle, mobile, togglePop, searchbar, SectionSetter }) {
  const Component = mobile ? Mobile : PC;

  return (
    <Component
      user={user}
      links={links}
      state={state}
      toggle={toggle}
      togglePop={togglePop}
      searchbar={searchbar}
      SectionSetter={SectionSetter}
    />
    
  );
}

export default Menu;
