import React, { Component } from "react";
import "../../style.css"

class PrimeiraPagina extends Component {
    render() {
        return(
            <section>
            <div class="grupo_cards">
              <div class="card">
                  <a href="listagem.html">Pet</a>
              </div>
              <div class="card">
                  <a href="cadastro.html">Cliente</a>
              </div>
              <div class="card">
                  <a href="cadastro.html">Passeador</a>
              </div>
          </div>
        </section>
        )
    }
}
export default PrimeiraPagina