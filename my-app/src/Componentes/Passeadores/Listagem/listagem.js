import React, { Component } from "react";
import "../../style.css"
import ListagemPets from "../../Listagemfake/ListagemPets"
import { Link } from "react-router-dom";

class Listagem extends Component {

    render() {
        return (
            <section className="container">
                <div className="background_listagem">
                    <nav>
                        <Link to="/">Pets</Link>
                        <Link to="/">Clientes</Link>
                        <Link to="/">Passeadores</Link>
                    </nav>
                    <div className="titulo_pagina">
                        <h2>Pets</h2>
                        <Link to="/">Voltar</Link>
                    </div>
                    <div className="lista">
                        <a href="#">Lista de pets </a>
                        <Link to="/CadastroPets">Cadastre seu pet</Link>
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

  