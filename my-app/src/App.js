import React, { Fragment } from 'react';
import './App.css';
import PaginaInicial from './Componentes/PaginaInicial'
import Listagem from './Componentes/Listagem/listagem';

function App() {
  return (
    <Fragment>
      <PaginaInicial/>
      <Listagem/>
    </Fragment>
  );
}

export default App;
