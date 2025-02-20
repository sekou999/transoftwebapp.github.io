<<<<<<< HEAD
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InscriptionTransoft.module.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


const InscriptionTransoft = () => {
  const [activeForm, setActiveForm] = useState("login");
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
=======
import React, {useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InscriptionTransoft.module.css";
import UserService from '../Services/UserService';
import { AuthContext, } from '../Security/AuthContext';
import { NavLink } from 'react-router-dom';
 
const InscriptionTransoft = () => {
  const [activeForm, setActiveForm] = useState("connexion");
  const navigate = useNavigate();
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');  // État pour gérer le message de succès ou d'erreur
  const [error, setError] = useState('');
  const [telephone, setTelephone] = useState('');
  const { login,auth } = useContext(AuthContext);
  
  const saveUser = (e) => {
    e.preventDefault();
    setMessage(''); 
    setError('');
    const user = { nom, prenom,telephone,password,email };
    UserService.createUser(user)
    .then((response) => {
      setMessage(response.data.message);
    setActiveForm("login");
     //  navigate("/home");
    })
    .catch((error) => {
     
      if (error.response && error.response.status === 400) {
        setError(error.response.data.message);  // Affiche le message du serveur
      } 
      else {
        setError('Erreur inattendue.');
      }
  });
};

 

  const connecter = async (e) => {
    e.preventDefault();
   
    await login(telephone, password);
  }
 
>>>>>>> 17fb87993fd7be3893e720356ca62f90e1d5ee86

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <div className={styles.logo}>
<<<<<<< HEAD
            <NavLink className={styles.navlink} to="/accueil">
                <img
                  src="img/TranSoftLogo.png"
                  alt="Logo"
                  width="65px"
                  height="45px"
                />
                TRANSOFT
=======
            <NavLink styles='color: white;' to="/accueil">
              <img
                src="img/TranSoftLogo.png"
                alt="Logo"
                width="65px"
                height="45px"
              />
              TRANSOFT
>>>>>>> 17fb87993fd7be3893e720356ca62f90e1d5ee86
              </NavLink>
            </div>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
<<<<<<< HEAD
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
=======
        {activeForm === "signup" && (
          <div className={styles.formContainer}>
            <h2>Inscription</h2>
      {/* Affiche le message d'erreur */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={saveUser}>
              <div className={styles.formGroup}>
                <label htmlFor="signup-name">Nom </label>
                <input type="text" id="signup-name"  value={nom} onChange={(e) => setNom(e.target.value)} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="signup-name">Prénom</label>
                <input type="text" id="signup-name"  value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="signup-name">Téléphone</label>
                <input type="text" id="signup-name"  value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="signup-email">Email</label>
                <input type="email" id="signup-email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="signup-password">Mot de passe</label>
                <input type="password" id="signup-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <button type="submit" className={styles.btn}>S'inscrire</button>
            </form>
            <div className={styles.toggleForm}>
              <a href="#" onClick={() => setActiveForm("connexion")}>
                Déjà inscrit ? Connectez-vous
              </a>
            </div>
          </div>
        )}

        {activeForm === "connexion" && (
          <div className={styles.formContainer}>
            <h2>Connexion</h2>
            {auth?.message && <p className={styles.alert}>{auth?.message}</p>}
            {auth?.error && <p className={styles.alerterror}>{auth?.error}</p>}
             
            <form onSubmit={connecter}>
              <div className={styles.formGroup}>
                <label htmlFor="login-email">Téléphone</label>
                <input type="text" id="login-telephone" name="telephone"  onChange={(e) => setTelephone(e.target.value)} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="login-password">Mot de passe</label>
                <input type="password" id="login-password" name="password" onChange={(e) => setPassword(e.target.value)} required />
>>>>>>> 17fb87993fd7be3893e720356ca62f90e1d5ee86
              </div>
              <button type="submit" className={styles.btn}>Se connecter</button>
            </form>
            <div className={styles.toggleForm}>
              <a href="#" onClick={() => setActiveForm("signup")}>
                Pas encore de compte ? Inscrivez-vous
              </a>
<<<<<<< HEAD
              <div className={styles.dashboard}>
                 <Link to="http://localhost:5173/login">Autre connexion privee  </Link>
              </div>
=======
>>>>>>> 17fb87993fd7be3893e720356ca62f90e1d5ee86
            </div>
          </div>
        )}

<<<<<<< HEAD
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
=======
        
      </main>

    </div>
       
>>>>>>> 17fb87993fd7be3893e720356ca62f90e1d5ee86
  );
};

export default InscriptionTransoft;






