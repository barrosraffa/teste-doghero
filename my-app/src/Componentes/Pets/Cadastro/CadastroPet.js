import React, { Component } from "react";
import "../../../style.css";
import { Link } from "react-router-dom";

class CadastroPets extends Component {
    render() {
        return  (
            <section className="container">
                <div className="cadastro">
                    <div className="btn_voltar">
                    <Link to="/pets">Voltar</Link>
                    </div>
                    <div className="form_background">
                        <h4>Cadastro de Pet</h4>
                        <div> 
                            <label for="nome-do-pet"></label>
                            <input type="text" placeholder="Nome do pet"/>
                        </div>   
                    
                        <div>
                            <label for="raça-do-pet"></label>
                            <input type="text" placeholder="Raça do pet" name="senha-do-pet"/>
                        </div> 
                
                        <div>
                            <label for="sexo-do-pet"></label>
                            <input type="text" placeholder="Sexo do pet" name="senha-da-pessoa"/>
                        </div>
                        <div>
                            <label for="Peso-do-pet"></label>
                            <input type="text" placeholder="Peso do pet" name="senha-da-pessoa"/>
                        </div>
                        <input className="btn" type="submit" value="Cadastrar"/>
                    </div>
                </div>
            </section>
        )
    }
   
}

export default CadastroPets
