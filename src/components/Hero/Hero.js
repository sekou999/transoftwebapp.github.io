import React from "react";
import styles from "./Hero.module.css"

function Hero() {
  return (
   
      <section
        className={styles.hero}  id="home"
      >
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Voyagez en toute simplicité avec TRANSOFT
            </h1>
            <p>
              Réservez vos billets d'autocar en quelques clics auprès des
              meilleures compagnies de transport
            </p>
            <a href="#companies" className={styles.btn}>
              Voir nos compagnies partenaires
            </a>
          </div>
        </div>
      </section>
    
  );
}

export default Hero;
