import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PaginaInicial from './Componentes/PaginaInicial';

// Listagem pets, clientes e passeadores 
import ListagemPet from './Componentes/Pets/Listagem/listagemPet';

// Apresentação pets, clientes e passeadores 
import ApresentacaoPet from './Componentes/Pets/Apresentação/ApresentacaoPet';


// Cadastros pets, clientes e passeadores
import CadastroPets from './Componentes/Pets/Cadastro/CadastroPet';

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
      {/* Route Pets */}
      <Route exact path="/pets" component={ListagemPet} />
      <Route exact path="/CadastroPets" component={CadastroPets} />
      <Route exact path="/ApresentacaoPet" component={ApresentacaoPet} />
      {/* Route Clientes */}

      {/* Route Passeadores */}
    </switch>
  )
}


export default App;
