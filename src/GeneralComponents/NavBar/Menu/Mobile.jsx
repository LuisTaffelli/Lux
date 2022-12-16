// import { GrClose } from 'react-icons/gr';

// import Avatar from '../../Avatar/index';


// import Searchbar from '../SearchbarStater';



// import Logo from '../Logo';

// import {
//   MobileMenu,
//   Container,
//   BottomLink,
//   MobileSearchbar,
//   MobileLink,
//   LinksContainer,
//   BottomContainer,
// } from './MobileElements';
// import { LoginButton } from './PCElements';

// function Mobile({ searchbar, links, state, user, toggle, togglePop }) {
//   return (
//     <>
//       <MobileMenu show={state}>
//         <Container>
//           <button className="menu" onClick={toggle} type="button">
//             <GrClose size={20} />
//           </button>

//           {/* Middle buttons */}

//           {user?.name ? (
//             <>
//               <Avatar user={user} text="hola" lg toRight />

//               <LinksContainer>
//                 {links?.map((link, i) => (
//                   <MobileLink onClick={toggle} key={i} to={link.to}>
//                     <span className="icon">{link.icon}</span> {link.label}
//                   </MobileLink>
//                 ))}
//               </LinksContainer>
//             </>
//           ) : null}

//           <BottomContainer alignCenter>
//             {/* <BottomLink to="/mode">Cambiar a modo instructor</BottomLink> */}
//             <BottomLink to="/help">Ayuda</BottomLink>

//             {!user?.name ? (
//               <LoginButton className="login-button" onClick={togglePop}>
//                 Ingresar
//               </LoginButton>
//             ) : null}

//             <Logo className="logo-sm" theme="grey" alt="Meet your finance" />
//           </BottomContainer>
//         </Container>
//       </MobileMenu>

//       {/* <MobileSearchbar>
//         {searchbar}
//         <div className="shop">
//           <img src="/images/Mobile/chart.png" alt="" />
//         </div>
//       </MobileSearchbar> */}
//     </>
//   );
// }

// export default Mobile;
