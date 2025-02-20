<<<<<<< HEAD
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
=======
import React, { useState,useContext, useEffect, useRef  } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import AuthContext from '../Security/AuthContext';
import { FaUser } from 'react-icons/fa'; // Import de l'icône utilisateur

function Navbar() {
   
  const { auth, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
>>>>>>> 17fb87993fd7be3893e720356ca62f90e1d5ee86

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
<<<<<<< HEAD

=======
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };
// Ferme le menu lorsqu'on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
>>>>>>> 17fb87993fd7be3893e720356ca62f90e1d5ee86
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <img src="img/TranSoftLogo.png" alt="Logo" width="65px" height="45px" />
            TRANSOFT
          </div>
          
          {/* Utilisez styles.navLinks pour CSS Modules */}
          <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
<<<<<<< HEAD
            <li><NavLink to="/">Accueil</NavLink></li>
=======
            <li><NavLink to="/accueil">Accueil</NavLink></li>
>>>>>>> 17fb87993fd7be3893e720356ca62f90e1d5ee86
            <li><NavLink to="/reservation">Réservation</NavLink></li>
            <li><NavLink to="/recherche">Rechercher un Voyage</NavLink></li>
            <li><NavLink to="/contact">Nous-Contactez</NavLink></li>
            <li><NavLink to="/about">A propos</NavLink></li>
<<<<<<< HEAD
            <li><NavLink to="/connexion">Connexion</NavLink></li> {/* Lien ajouté */}
=======
            <li><NavLink to="/" onClick={() => logout()}>Se deconnecter</NavLink></li>
          {/*   <li><NavLink to="/" onClick={() => logout()}>Se deconnecter</NavLink></li>*/}
           

      {auth.token ? (
      auth.user &&  
        
        <li>
              <div className={styles.profileIcon} onClick={toggleDropdown} ref={dropdownRef}>
                {/* Icône utilisateur */}
                <FaUser className={styles.icon} /> {/* Icône utilisateur */}
                
                {/* Menu déroulant */}
                {dropdownOpen && (
                  <div className={styles.dropdownMenu}>
                    <button className={styles.dropdownItem}>Voir mon compte</button>
                    <button className={styles.dropdownItem}>Modifier mon compte</button>
                    <button onClick={() => logout()} className={styles.dropdownItem}>Se déconnecter</button>
                  </div>
                )}
              </div>
            </li>
      ) : (
        <li><NavLink to="/connexion">Se connecter</NavLink></li>
      )}
>>>>>>> 17fb87993fd7be3893e720356ca62f90e1d5ee86
          </ul>
          
          {/* Utilisez styles.burgerMenu pour CSS Modules */}
          <div className={`${styles.burgerMenu} ${menuOpen ? styles.active : ''}`} onClick={toggleMenu}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
<<<<<<< HEAD



//   function toggleMenu() {
//     const menu = document.getElementById('menu');
//     menu.classList.toggle('show');
    
//     const bars = document.querySelectorAll('.bar');
//     bars.forEach((bar, index) => {
//         if (menu.classList.contains('show')) {
//             if (index === 0) bar.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
//             if (index === 1) bar.style.opacity = '0';
//             if (index === 2) bar.style.transform = 'rotate(45deg) translate(-5px, -6px)';
//         } else {
//             bar.style.transform = 'none';
//             bar.style.opacity = '1';
//         }
//     });
// }

// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import styles from "./Navbar.module.css";
// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className={styles.header}>
//       <div className="containerA">
//         <nav>
//           <div className={styles.logo} >
//             <img src="img/Frame 2.png" alt="Logo" width="165px" height="45px" />
//           </div>
//           <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
//             <li><NavLink to="/">Accueil</NavLink></li>
//             <li><NavLink to="/reservation">Réservation</NavLink></li>
//             <li><NavLink to="/recherche">Rechercher un Voyage</NavLink></li>
//             <li><NavLink to="/contact">Nous-Contactez</NavLink></li>
//             <li><NavLink to="/about">A propos</NavLink></li>
//           </ul>
//           <div className={`burger-menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
//             <div className={styles.bar}></div>
//             <div className={styles.bar}></div>
//             <div className={styles.bar}></div>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Navbar;
=======
>>>>>>> 17fb87993fd7be3893e720356ca62f90e1d5ee86
