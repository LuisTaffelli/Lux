// import Mobile from './Menu/Mobile';
import PC from './Menu/PC';

// Menu dinámico para renderizado de pc o mobile

function Menu({ user, links, state, toggle, mobile, togglePop, searchbar }) {
  const Component = PC;

  return (
    <Component
      user={user}
      links={links}
      state={state}
      toggle={toggle}
      togglePop={togglePop}
      searchbar={searchbar}
    />
    
  );
}

export default Menu;
