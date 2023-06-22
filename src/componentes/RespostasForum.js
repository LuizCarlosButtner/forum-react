import React from 'react';
import respostasForumData from './data/respostasForumData.json';
import styles from './RespostasForum.module.css';

class RespostasForum extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const { resposta, username } = this.state;

  }

  render() {
    const { respostas } = respostasForumData;

    return (
      <div>
        <h2>Respostas</h2>
        {respostas.map((resposta) => (
          <div key={resposta.id} className={styles.respostaContainer}>
            <p className={styles.resposta}>{resposta.resposta}</p>
            <div className={styles.details}>
              <span className={styles.autor}> {resposta.autor}</span>
              <span className={styles.data}><span class="material-symbols-outlined">calendar_month</span>{resposta.data}</span>
            </div>

            <div className={styles.stats}>
              <span className={styles.curtidas}><span class="material-symbols-outlined">
                thumb_up
              </span>{resposta.curtidas}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}



export default RespostasForum;




