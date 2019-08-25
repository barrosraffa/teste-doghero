import React, { Component } from "react";
import "../../../style.css"
import ListagemClientes from "../../Listagemfake/ListagemClientes"
import { Link } from "react-router-dom";
import FotoCliente from "../../../assets/mariana.jpeg"


class ApresentacaoCliente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dadosClientes: ListagemClientes[0]
        }
    }

    render() {
        return (
                <section className="container">
                    <div className="background_listagem">
                        <div className="apresentacao">
                        <Link className="btn" to="/Clientes">Voltar</Link>
                        <h4>Cliente</h4>
                            <div className="apresentação_lista">
                            <div>
                                <img src={FotoCliente} />
                            </div>
                            <div className="style_li">
                                <h3> {this.state.dadosClientes.nome}</h3>
                                <ul>
                                    <li>{this.state.dadosClientes.telefone}</li> 
                                    <li>{this.state.dadosClientes.email}</li>
                                    <li>{this.state.dadosClientes.idade}</li> 
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