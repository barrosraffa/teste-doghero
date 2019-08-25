import React, { Component } from "react";
import "../../../style.css"
import ListagemPasseadores from "../../Listagemfake/ListagemPasseadores"
import { Link } from "react-router-dom";
import FotoCarla from "../../../assets/carla.jpeg"


class ApresentacaoCliente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dadosPasseadores: ListagemPasseadores[0]
        }
    }

    render() {
        return (
                <section className="container">
                    <div className="background_listagem">
                        <div className="apresentacao">
                        <Link className="btn" to="/passeadores">Voltar</Link>
                        <h4>Passeadora</h4>
                            <div className="apresentação_lista">
                            <div>
                                <img src={FotoCarla} />
                            </div>
                            <div className="style_li">
                                <h3> {this.state.dadosPasseadores.nome}</h3>
                                <ul>
                                    <li>{this.state.dadosPasseadores.telefone}</li> 
                                    <li>{this.state.dadosPasseadores.email}</li>
                                    <li>{this.state.dadosPasseadores.idade}</li> 
                                </ul>
                            </div>  
                            </div>
                            
                        </div>
                    </div>
                </section>
        )
    }
}

export default ApresentacaoCliente