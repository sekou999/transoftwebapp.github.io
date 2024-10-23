import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InscriptionTransoft.module.css";

const InscriptionTransoft = () => {
  const [activeForm, setActiveForm] = useState("signup");
  const navigate = useNavigate();
  const handleSignupSubmit = (e) => {
    e.preventDefault();
   
    setActiveForm("reservation");
    navigate("/home");
  };
  
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    setActiveForm("reservation");
    navigate("/home");
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    alert("Réservation effectuée avec succès !");
  };

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <img
                src="img/TranSoftLogo.png"
                alt="Logo"
                width="65px"
                height="45px"
              />
              TRANSOFT
            </div>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        {activeForm === "signup" && (
          <div className={styles.formContainer}>
            <h2>Inscription</h2>
            <form onSubmit={handleSignupSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="signup-name">Nom complet</label>
                <input type="text" id="signup-name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="signup-phone">Téléphone</label>
                <input type="text" id="signup-phone" name="phone" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="signup-email">Email</label>
                <input type="email" id="signup-email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="signup-password">Mot de passe</label>
                <input type="password" id="signup-password" name="password" required />
              </div>
              <button type="submit" className={styles.btn}>S'inscrire</button>
            </form>
            <div className={styles.toggleForm}>
              <a href="#" onClick={() => setActiveForm("login")}>
                Déjà inscrit ? Connectez-vous
              </a>
            </div>
          </div>
        )}

        {activeForm === "login" && (
          <div className={styles.formContainer}>
            <h2>Connexion</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="login-email">Email</label>
                <input type="email" id="login-email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="login-password">Mot de passe</label>
                <input type="password" id="login-password" name="password" required />
              </div>
              <button type="submit" className={styles.btn}>Se connecter</button>
            </form>
            <div className={styles.toggleForm}>
              <a href="#" onClick={() => setActiveForm("signup")}>
                Pas encore de compte ? Inscrivez-vous
              </a>
            </div>
          </div>
        )}

        {activeForm === "reservation" && (
          <div className={styles.formContainer}>
            <h2>Réservation</h2>
            <form onSubmit={handleReservationSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="departure">Ville de départ</label>
                <input type="text" id="departure" name="departure" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="arrival">Ville d'arrivée</label>
                <input type="text" id="arrival" name="arrival" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="date">Date de départ</label>
                <input type="date" id="date" name="date" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="company">Compagnie</label>
                <select id="company" name="company" required>
                  <option value="">Choisissez une compagnie</option>
                  <option value="sonef">SONEF Trans</option>
                  <option value="diarra">Diarra Trans</option>
                  <option value="africa-tour">Africa Tour Trans</option>
                  <option value="trans-sahel">Trans Sahel</option>
                </select>
              </div>
              <button type="submit" className={styles.btn}>Réserver</button>
            </form>
          </div>
        )}
      </main>

    </div>
      // <footer className={styles.footer}>
      //   <div className={styles.container}>
      //     <p>© 2023 TRANSOFT. Tous droits réservés.</p>
      //   </div>
      // </footer>
  );
};

export default InscriptionTransoft;






