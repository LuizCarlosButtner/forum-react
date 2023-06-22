import React from 'react';
import styles from './ListaTopicos.module.css';
import topicos from './data/topicos.json';

const ListaTopicos = () => {
  const { topicosMaisRecentes, topicosMaisRespondidos, topicosMaisCurtidos } = topicos;

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2 className={styles.titulo}>Tópicos Mais Recentes</h2>
        <h2 className={styles.titulo_short}>Mais Recentes</h2>
        <ul className={styles.topicoList}>
          {topicosMaisRecentes.map((topico, index) => (
            <li className={styles.topicoItem} key={index}>{topico}</li>
          ))}
        </ul>
      </div>
      <div className={styles.section}>
        <h2 className={styles.titulo}>Tópicos Mais Respondidos</h2>
        <h2 className={styles.titulo_short}>Mais Respondidos</h2>
        <ul className={styles.topicoList}>
          {topicosMaisRespondidos.map((topico, index) => (
            <li className={styles.topicoItem} key={index}>{topico}</li>
          ))}
        </ul>
      </div>
      <div className={styles.section}>
        <h2 className={styles.titulo}>Tópicos Mais Curtidos</h2>
        <h2 className={styles.titulo_short}>Mais Curtidos</h2>
        <ul className={styles.topicoList}>
          {topicosMaisCurtidos.map((topico, index) => (
            <li className={styles.topicoItem} key={index}>{topico}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListaTopicos;

