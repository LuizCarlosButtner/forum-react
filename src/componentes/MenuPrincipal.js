import React from 'react';
import styles from './MenuPrincipal.module.css';

const MenuPrincipal = () => {
  return (
    <nav className={styles.nav1}>
      <div className={styles.menu}>
        <h1>Forum de discussão</h1>
        <ul className={styles.menuItems}>
          <li className={styles.menuItem}>Home</li>
          <li className={styles.menuItem}>Fóruns</li>
          <li className={styles.menuItem}>Tópicos</li>
          <li className={styles.menuItem}>Pesquisa</li>
          <li className={styles.menuItem}>Categorias</li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuPrincipal;
