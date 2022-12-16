import OnlyPC from '../../OnlyPC';
import Avatar from '../../Avatar';

import { MenuLink, MenuContainer } from './PCElements';
import isLanding from '../../../Utils/isLanding';
import { PrimaryButton } from '../../Buttons';

// Este menu es usado en el NavBar

function PC({ searchbar, links, user, togglePop }) {
  const theme = isLanding();

  return (
    <>
      <MenuContainer>
        {links?.map(({ to, label }, i) => (
          <li key={i}>
            <MenuLink to={to}>{label}</MenuLink>
          </li>
        ))}
      </MenuContainer>
    </>
  );
}

export default PC;
