import React, { Fragment } from 'react';
import './App.css';
import PaginaInicial from './Componentes/PaginaInicial';
import Listagem from './Componentes/Listagem/listagem';
import Apresentacao from './Componentes/Apresentação/Apresentacao';
import FundoListagem from './Componentes/FundoListagem/FundoListagem';
import CadastroPets from './Componentes/Cadastro/cadastro';

function App() {
  return (
    <Fragment>
      <PaginaInicial/>
      <FundoListagem />
      <Listagem/>
      <Apresentacao/>
      <CadastroPets/>
    </Fragment>
  );
}

export default App;
