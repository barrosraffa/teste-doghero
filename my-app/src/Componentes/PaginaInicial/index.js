import React, { Component } from "react";
import "../../style.css"
import { Link } from "react-router-dom";

class PrimeiraPagina extends Component {
    render() {
        return(
            <section>
            <div className="grupo_cards container">
                <h3>Bem-vindo ao nosso sistema</h3>
              <div className="card">
              <Link to="/pets">Pets</Link>
              </div>
              <div className="card">
              <Link to="/Clientes">Clientes</Link>
              </div>
              <div className="card">
              <Link to="/passeadores">Passeadores</Link>
              </div>
          </div>
        </section>
        )
    }
}
export default PrimeiraPagina