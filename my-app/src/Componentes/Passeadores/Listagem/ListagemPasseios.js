import React, { Component } from "react";
import "../../../style.css"
import ListagemPasseios from "../../Listagemfake/ListagemPasseadores"
import { Link } from "react-router-dom";

class Listagem extends Component {

    render() {
        return (
            <section className="container">
                <div className="background_listagem">
                    <nav>
                        <Link to="/pets">Pets</Link>
                        <Link to="/Clientes">Clientes</Link>
                        <Link to="/passeadores">Passeadores</Link>
                    </nav>
                    <div className="titulo_pagina">
                        <h2>Passeadores</h2>
                        <Link className="btn" to="/">Voltar</Link>
                    </div>
                    <div className="lista">
                        <a href="#">Lista de passeadores </a>
                        <Link to="/CadastroPasseadores">Cadastro de passeador</Link>
                        <ul>
                            {
                            ListagemPasseios.map((passeios) => {
                                return( 
                                <li>
                                <Link to="/ApresentacaoPasseador">{passeios.nome}</Link>
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

  