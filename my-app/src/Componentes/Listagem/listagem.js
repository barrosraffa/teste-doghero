import React, { Component } from "react";
import "../../style.css"
import ListagemPets from "../Listagemfake/ListagemPets"

class Listagem extends Component {

    render() {
        return (
            <section className="container">
                <div className="background_listagem">
                    <nav>
                        <a href="#">Pets</a>
                        <a href="#">Clientes</a>
                        <a href="#">Passeadores</a>
                    </nav>
                    <div className="titulo_pagina">
                        <h2>Pets</h2>
                        <a className="btn" href="#">voltar</a>
                    </div>
                    <div className="lista">
                        <a href="#">Lista de pets </a>
                        <a href="#">Cadastre seu pet</a>
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

  