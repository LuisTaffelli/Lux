import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { BiBookAlt, BiChevronDown, BiLogOut, BiUser } from 'react-icons/bi';
import useShow  from '../../Utils/Hooks/useShow';
import { Container, Image, Info, Options, Username } from './AvatarElements';
import { AvatarContainer } from './InstructorElements';
// import { logout } from '../../Redux/Actions/session';

import isLanding from '../../Utils/isLanding';

const auxImg =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png';

/**
 * @user: { name: string, img: string }
 * @text: string
 * @toRight: bool
 * @options: bool (if true show options)
 */

// Carga de avatares de alumnos y profesores por referencia "isInstructor"


function Avatar({ user, text, toRight, options, instructorName, isInstructor }) {
  if (isInstructor) return (
    <AvatarContainer>
      <div className="right">
        <h5>{instructorName}</h5>
        {isInstructor ? (
          <p className="instructor-badge">
            <span className="icon">
              <BiUser size={8} color='#FFF'/>
            </span>
            Instructor
          </p>
        ) : undefined}
      </div>
    </AvatarContainer>
  );
  const theme = isLanding() ? 'light' : 'dark';

  // const dispatch = useDispatch();
  const { state, toggle } = useShow(false);

  const { name, photo } = user;

  const Redirect = useNavigate()

  const handleClick = (e) => {
    toggle();
  };

  const closeSession = () => {
    // dispatch(logout());
    Redirect('/')
  };

  const AvatarInfo = options ? 'button' : 'div';

  return (
    <Container onClick={options ? handleClick : () => {}}>
      <AvatarInfo className="avatar-info" type={options ? 'button' : 'div'}>
        {!toRight && (
          <>
            <Info left>
              <span>{text}</span>
              <Username>{name}</Username>
            </Info>
            <Image src={photo || auxImg} alt="" />
            {options && <BiChevronDown />}
          </>
        )}

        {toRight && (
          <>
            {options && <BiChevronDown />}
            <Image src={photo || auxImg} alt="" />
            <Info right>
              <span>{text}</span>
              <Username>{name}</Username>
            </Info>
          </>
        )}
      </AvatarInfo>

      {options && state ? (
        <Options theme={theme}>
          <Link to="/profile" className="link">
            <BiUser />
            Perfil
          </Link>
          <Link to="/aprendizaje" className="link">
            <BiBookAlt /> Aprendizaje
          </Link>
          <button onClick={closeSession} type="button" className="logout">
            <BiLogOut /> Cerrar Sesion
          </button>
        </Options>
      ) : null}
    </Container>
  );
}

export default Avatar;
