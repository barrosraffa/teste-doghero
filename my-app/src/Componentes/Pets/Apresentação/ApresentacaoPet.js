import React, { Component } from "react";
import "../../../style.css"
import ListagemPets from "../../Listagemfake/ListagemPets"
import { Link } from "react-router-dom";
import FotoPet from "../../../assets/dog.jpeg"


class ApresentacaoPet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dadosPet: ListagemPets[0]
        }
    }

    render() {
        return (
                <section className="container">
                    <div className="background_listagem">
                        <div className="apresentacao">
                        <Link className="btn" to="/pets">Voltar</Link>
                        <h4>Pet</h4>
                            <div className="apresentação_lista">
                            <div>
                                <img src={FotoPet} />
                            </div>
                            <div className="style_li">
                                <h3> {this.state.dadosPet.nome}</h3>
                                <ul>
                                    <li>{this.state.dadosPet.sexo}</li> 
                                    <li>{this.state.dadosPet.peso}</li> 
                                    <li>{this.state.dadosPet.raça}</li> 
                                    <li>{this.state.dadosPet.idade}</li> 
                                </ul>
                            </div>  
                            </div>
                            
                        </div>
                    </div>
                </section>
        )
    }
}

export default ApresentacaoPet