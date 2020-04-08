import React, { Component } from 'react';
import FormValidator from './FormValidator';

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.validador = new FormValidator({
            campo: 'nome',
            metodo: 'isEmpty'
        });

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
        }

        this.state = this.stateInicial;

    }

    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitFormulario = () => {

        if(this.validador.valida(this.state)){
            this.props.escutadorDeSubmit(this.state);
            this.setState(this.stateInicial);
        } else {
            console.log('Submit Bloqueado');
        }
    }

    render() {

        const { nome, livro, preco } = this.state;

        return (

            <div className="row">
                <form>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="nome">Nome</label>
                        <input
                            className="validate"
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="livro">Livro</label>
                        <input
                            className="validate"
                            id="livro"
                            type="text"
                            name="livro"
                            value={livro}
                            onChange={this.escutadorDeInput}
                        />

                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="preco">Preço</label>
                        <input
                            className="validate"
                            id="preco"
                            type="text"
                            name="preco"
                            value={preco}
                            onChange={this.escutadorDeInput}
                        />

                    </div>
                    <button className="waves-effect waves-light btn" onClick={this.submitFormulario} type="button">Salvar
                </button>
                </form>

            </div>
        )
    }
}

export default Formulario;