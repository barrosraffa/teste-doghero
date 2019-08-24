import React, { Component } from "react";
import "../../../style.css"
import ListagemPets from "../../Listagemfake/ListagemPets"
import { Link } from "react-router-dom";

class Listagem extends Component {

    render() {
        return (
            <section className="container">
                <div className="background_listagem">
                    <nav>
                        <Link to="/pets">Pets</Link>
                        <Link to="/Clientes">Clientes</Link>
                        <Link to="/passeios">Passeadores</Link>
                    </nav>
                    <div className="titulo_pagina">
                        <h2>Passeadores</h2>
                        <Link className="btn" to="/">Voltar</Link>
                    </div>
                    <div className="lista">
                        <a href="#">Lista de pets </a>
                        <Link to="/CadastroPasseadores">Cadastro de passeador</Link>
                        <ul>
                                {
                                ListagemPets.map((pet) => {
                                    return( 
                                    <li>
                                    {pet.nome}
                                    </li>
                                    )
                                })
                              }
                        </ul>
                    
                    </div>
                </div>
            </section>
        )
    }
}

export default Listagem

  