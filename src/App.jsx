import { useEffect, useReducer } from 'react';
import { Route, Routes, Navigate } from 'react-router';
import useShow  from './Utils/Hooks/useShow';


import './App.css';
import Navbar from './GeneralComponents/NavBar/index';
import Landing from './Pages/Landing/Landing';
import Footer from './GeneralComponents/Footer';


function App() {

  const { state, toggle } = useShow(false);
  
  return (
    <>
      <Navbar state={state} toggle={toggle}/>
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
          <Route element={<Landing />} exact path="/"/>


          <Route element={<Navigate to="/" />} path="*" />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
