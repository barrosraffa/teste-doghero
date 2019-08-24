import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PaginaInicial from './Componentes/PaginaInicial';

// Listagem pets, clientes e passeadores 
import ListagemPet from "./Componentes/Pets/Listagem/listagemPet";
import ListagemCliente from "./Componentes/Clientes/Listagem/listagemCliente";
import ListagemPasseadores from "./Componentes/Passeadores/Listagem/ListagemPasseios"

// Apresentação pets, clientes e passeadores 
import ApresentacaoPet from "./Componentes/Pets/Apresentação/ApresentacaoPet";
import ApresentacaoCliente from "./Componentes/Clientes/Apresentação/ApresentacaoClientes"
import ApresentacaoPasseador from "./Componentes/Passeadores/Apresentação/ApresentacaoPasseios"

// Cadastros pets, clientes e passeadores
import CadastroPets from "./Componentes/Pets/Cadastro/CadastroPet";
import CadastroCliente from "./Componentes/Clientes/Cadastro/CadastroCliente"
import CadastroPasseadores from "./Componentes/Passeadores/Cadastro/CadastroPasseios"

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
      <Route exact path="/Clientes" component={ListagemCliente} />
      <Route exact path="/CadastroCliente" component={CadastroCliente} />
      <Route exact path="/ApresentacaoCliente" component={ApresentacaoCliente} />
      {/* Route Passeadores */}
      <Route exact path="/passeadores" component={ListagemPasseadores} />
      <Route exact path="/CadastroPasseadores" component={CadastroPasseadores} />
      <Route exact path="/ApresentacaoPasseador" component={ApresentacaoPasseador} />
    </switch>
  )
}

export default App;
