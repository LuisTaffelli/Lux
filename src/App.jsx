import { useEffect, useReducer, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router';
import useShow  from './Utils/Hooks/useShow';

import FixedWhatsapp from './GeneralComponents/FixedContent/WhatsAppContainer';
import Navbar from './GeneralComponents/NavBar/index';
import Landing from './Pages/Landing/Landing';
import ComingSoon from './Pages/ComingSoon/';
import Footer from './GeneralComponents/Footer/';
import TopFooter from './GeneralComponents/FooterTop/SMFooter'
import Planes from './Pages/Planes/Index';


import './App.scss';
import './App.css';



function App() {

  const { state, toggle } = useShow(false);
  const [Section, setSection] = useState('')
  
  return (
    <>
      <Navbar state={state} toggle={toggle} SectionSetter={setSection}/>
      <Routes>
          {/*
            Las rutas van debajo de este comentario con la siguiente estructura:

            <Route element={Componente o Página a renderizar} path="Ruta en la que debe aparecer el componente"

            exact = Usarlo solo cuando se quiere renderizar en una ruta en especifico />

            En el caso de querer usar rutas privadas envolver el tag de ELEMENT de la siguiente manera:

            {<PrivateRoute> 
                < n Componentes a renderizar />
              </PrivateRoute>}

          */}
          {/*<Route element={<ComingSoon />} exact path="/"/>*/}
          
          <Route element={<Landing ScrollTo={Section} SectionSetter={setSection}/>} exact path="/"/>

          <Route element={<Planes ScrollTo={Section} />} exact path="/Planes"/>

          <Route element={<Navigate to="/" />} path="*" />
        </Routes>
        <TopFooter />
        <FixedWhatsapp />
    </>
  );
}

export default App;
