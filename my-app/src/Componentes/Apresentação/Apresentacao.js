import React, { Component } from "react";
import "../../style.css"
// import ListagemPets from "../Listagemfake/ListagemPets"


class Apresentacao extends Component {

    render() {
        return (
                <section className="container">
                    <div className="background_listagem">
                        <div className="apresentacao">
                            <img src="./my-app/assets/dog1.jpg" alt=""/>
                            <div className="apresentação_lista">
                                    <li></li>
                                    <button>Voltar</button>
                            </div>
                        </div>
                    </div>
                </section>

        )
    }
}

export default Apresentacao