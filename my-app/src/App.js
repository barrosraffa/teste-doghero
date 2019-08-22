import React, { Fragment } from 'react';
import './App.css';
import PaginaInicial from './Componentes/PaginaInicial';
import Listagem from './Componentes/Listagem/listagem';
import Apresentacao from './Componentes/Apresentação/Apresentacao';
import FundoListagem from './Componentes/FundoListagem/FundoListagem';

function App() {
  return (
    <Fragment>
      <PaginaInicial/>
      <FundoListagem />
      <Listagem/>
      <Apresentacao/>
    </Fragment>
  );
}

export default App;
