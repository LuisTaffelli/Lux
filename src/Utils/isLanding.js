import { useLocation } from 'react-router-dom';

// Hook personalizado para el comportamiento del NavBar


const isLanding = () => {
  const location = useLocation();
  return location.pathname === '/';
};

export const  isSession = ()=>{
  const Location = useLocation()

  return Location.pathname === '/Login' || Location.pathname === '/Register' 
}

export default isLanding;
