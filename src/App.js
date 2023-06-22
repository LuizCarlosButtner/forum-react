import React, { Component } from 'react';
import RespostaForm from './componentes/RespostaForm';
import RespostasForum from './componentes/RespostasForum';
import MenuPrincipal from './componentes/MenuPrincipal'
import ListaTopicos from './componentes/ListaTopicos'
import TopicoPrincipal from './componentes/TopicoPrincipal'
import './App.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      respostas: [] // Initialize an empty array for storing responses
    };
  }

  adicionarResposta = (resposta) => {
    // Add the new response to the array in state
    this.setState((prevState) => ({
      respostas: [...prevState.respostas, resposta]
    }));
  };

  render() {
    return (
      <div>
        <MenuPrincipal />
        <div className='main'>
          <ListaTopicos/>
          <TopicoPrincipal/>
          <RespostasForum />
          <RespostaForm />
        </div>

      </div>
    );
  }
}

export default App;
