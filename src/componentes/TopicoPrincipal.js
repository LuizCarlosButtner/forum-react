import React from 'react';
import styles from './TopicoPrincipal.module.css';
import forumData from './data/topicoPrincipal.json';

const TopicoPrincipal = () => {
  const { titulo, subtitulo, descricao, autor, dataPublicacao, curtidas, respostas } = forumData;

  return (
    <div className={styles.topicoContainer}>
      <h1 className={styles.topicoTitle}>{titulo}</h1>
      <h2 className={styles.topicoSubtitle}>{subtitulo}</h2>
      <p className={styles.topicoDescription}>{descricao}</p>

      <div className={styles.topicoInfo}>
        <span className={styles.author}><span class="material-symbols-outlined">
          account_circle
        </span>{autor}</span>
        <span className={styles.date}><span class="material-symbols-outlined">
          calendar_month
        </span>{dataPublicacao}</span>
      </div>

      <div className={styles.topicoStats}>
        <span className={styles.likes}><span class="material-symbols-outlined">
          thumb_up
        </span>                 {curtidas}</span>
        <span className={styles.replies}><span class="material-symbols-outlined">
          sms
        </span> {respostas}</span>
      </div>
    </div>
  );
};

export default TopicoPrincipal;
