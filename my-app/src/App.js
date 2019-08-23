import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PaginaInicial from './Componentes/PaginaInicial';
import Listagem from './Componentes/Pets/Listagem/listagem';
import Apresentacao from './Componentes/Pets/Apresentação/Apresentacao';
import FundoListagem from './Componentes/Pets/FundoListagem/FundoListagem';
import CadastroPets from './Componentes/Pets/Cadastro/cadastro';

function App() {
  return (
    <Router>
      <Route component={Navegacao} />
    </Router>
  );
}

function Navegacao() {
  return (
    <switch>
      <Route exact path="/" component={PaginaInicial} />
      <Route exact path="/pets" component={Listagem} />
      <Route exact path="/CadastroPets" component={CadastroPets} />
      <Route exact path="/Apresentacao" component={Apresentacao} />
      <Route exact path="/FundoListagem" component={FundoListagem} />
    </switch>
  )
}



// function App() {
//   return (
//     <Fragment>
//       <PaginaInicial/>
//       <FundoListagem />
//       <Listagem/>
//       <Apresentacao/>
//       <CadastroPets/>
//     </Fragment>
//   );
// }

export default App;
