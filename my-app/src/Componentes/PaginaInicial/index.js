import React, { Component } from "react";
import "../../style.css"
import { Link } from "react-router-dom";

class PrimeiraPagina extends Component {
    render() {
        return(
            <section>
            <div className="grupo_cards container">
              <h3>Bem-vindo ao nosso sistema</h3>
              <Link to="/pets"><div className="card">Pets </div></Link>
              <Link to="/Clientes"><div className="card">Clientes</div></Link>
              <Link to="/passeadores"><div className="card">Passeadores</div></Link>   
          </div>
        </section>
        )
    }
}
export default PrimeiraPagina