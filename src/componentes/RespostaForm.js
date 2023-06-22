import React, { Component } from 'react';
import styles from './RespostaForm.module.css';

class RespostaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resposta: '',
      username: '',
      usuarioAutenticado: false
    };
  }

  handleChange(event) {
    this.setState({ resposta: event.target.value });
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { resposta, username } = this.state;


  }

  render() {
    const { resposta, username, usuarioAutenticado } = this.state;

    return (
      <div className={styles.div_container}>
        <h3>Enviar Resposta</h3>
        {usuarioAutenticado ? (
          <form onSubmit={this.handleSubmit.bind(this)}>
            <textarea
              className={styles.respostaInput}
              value={resposta}
              onChange={this.handleChange.bind(this)}
              placeholder="Digite sua resposta..."
            ></textarea>
            <br />
            <button className={styles.enviarButton} type="submit">
              Enviar
            </button>
          </form>
        ) : (
          <div>
            <form>
              <input
                type="text"
                value={username}
                onChange={this.handleUsernameChange.bind(this)}
                placeholder="Digite seu nome de usuário..."
                required
              />
              <button
                className={styles.autenticarButton}
                onClick={() => {
                  if (username) {
                    this.setState({ usuarioAutenticado: true });
                  }
                }}
              >
                Autenticar
              </button>
            </form>
          </div>
        )}
        {usuarioAutenticado && (
          <div className={styles.usuarioLogado}>
            Usuário Logado: <span className={styles.username}>{username}</span>
          </div>
        )}
      </div>
    );
  }
}

export default RespostaForm;
