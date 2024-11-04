import React from 'react';
import styles from './Features.module.css'; // Import du fichier CSS Module

function Features() {
  return (
    <div className={styles.container}>
      <div className={styles.features}>
        <div className={styles.feature}>
          <i className="fas fa-bus"></i>
          <h3>Large choix de compagnies</h3>
          <p>Accédez à un vaste réseau de compagnies de transport pour trouver le voyage parfait.</p>
        </div>
        <div className={styles.feature}>
          <i className="fas fa-wallet"></i>
          <h3>Meilleurs prix garantis</h3>
          <p>Profitez des meilleures offres et tarifs compétitifs pour vos déplacements.</p>
        </div>
        <div className={styles.feature}>
          <i className="fas fa-headset"></i>
          <h3>Service client 24/7</h3>
          <p>Notre équipe est à votre disposition pour vous assister à tout moment.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
