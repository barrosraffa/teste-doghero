import React, { Component } from "react";
import "../../../style.css";
import { Link } from "react-router-dom";

class CadastroCliente extends Component {
    render() {
        return  (
            <section className="container">
                <div className="cadastro">
                    <div className="form_background">
                        <h4>Cadastro de Cliente</h4>
                        <Link to="/Clientes">Voltar</Link>
                        <div> 
                            <label for="nome-da-pessoa"></label>
                            <input type="text" placeholder="Seu nome"/>
                        </div>   
                    
                        <div>
                            <label for="senha-da-pessoa"></label>
                            <input type="password" placeholder="Sua senha" name="senha-da-pessoa"/>
                        </div> 
                
                        <div>
                            <label for="email-da-pessoa"></label>
                            <input type="email" placeholder="Seu email" name="senha-da-pessoa"/>
                        </div>
                        <div>
                            <label for="email-da-pessoa"></label>
                            <input type="text" placeholder="Seu telefone" name="senha-da-pessoa"/>
                        </div>
                        <input className="btn" type="submit" value="Cadastrar"/>
                    </div>
                </div>
            </section>
        )
    }
   
}

export default CadastroCliente
