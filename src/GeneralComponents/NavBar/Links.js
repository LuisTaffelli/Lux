import { BiBookAlt, BiEditAlt, BiLogOut } from 'react-icons/bi';
import { VscBell } from 'react-icons/vsc';
import { BsChatRight } from 'react-icons/bs';

const size = 18;

// En el caso de querer agregar link, añadirlos al final del array, 
// respetando Label y ruta

export const links = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Info',
    to: '/',
    anchorTo: 'Info'
  },
  {
    label: 'Planes',
    to: '/Planes',
  },
  {
    label: 'Contacto',
    to: '',
    anchorTo: 'Contacto'
  },
];

// En el caso de querer agregar link, añadirlos al final del array, respetando Label, Ruta e Icono

// export const linksMobile = [
//   {
//     label: 'Herramientas',
//     icon: <BiBookAlt size={size} />,
//     to: '/tools',
//   },
//   {
//     label: 'Aprendizaje',
//     icon: <BiBookAlt size={size} />,
//     to: '/learning',
//   },
//   {
//     label: 'Notificaciones',
//     icon: <VscBell size={size} />,
//     to: '/notifications',
//   },
//   {
//     label: 'Mensajes',
//     icon: <BsChatRight size={size - 2} />,
//     to: '/messages',
//   },
//   {
//     label: 'Editar perfil',
//     icon: <BiEditAlt size={size} />,
//     to: '/profile',
//   },
//   {
//     icon: <BiLogOut size={size} />,
//     label: 'Cerrar sesion',
//     to: '/logout',
//   },
// ];
