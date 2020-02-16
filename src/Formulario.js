import React, { Component } from 'react';

class Formulario extends Component {

    constructor(props){
        super(props);

        this.stateInicial = {
            name:'',
            livro:'',
            preco:''
        }

        this.stage = this.stateInicial;
    }

    escultadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    render(){

        const { name, livro, preco } = this.stage;

        return(
            <form>

                <label htmlFor="name">name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange = {this.escultadorDeInput}
                />

                <label htmlFor="livro">Livro</label>
                <input
                    id="livro"
                    type="text"
                    name="livro"
                    value={livro}
                    onChange = {this.escultadorDeInput}
                />


                <label htmlFor="preco">Preço</label>
                <input
                    id="preco"
                    type="text"
                    name="preco"
                    value={preco}
                    onChange = {this.escultadorDeInput}
                />


                <button type="button">Salvar
                </button>
            </form>
        )
    }
}

export default Formulario;