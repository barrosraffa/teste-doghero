import React, { Component } from "react";
import "../../style.css"

class PrimeiraPagina extends Component {
    render() {
        return(
            <section>
            <div className="grupo_cards container">
                <h3>Bem-vindo ao sistema....</h3>
              <div className="card">
                  <a href="#">Pet</a>
              </div>
              <div className="card">
                  <a href="#">Cliente</a>
              </div>
              <div className="card">
                  <a href="#">Passeador</a>
              </div>
          </div>
        </section>
        )
    }
}
export default PrimeiraPagina