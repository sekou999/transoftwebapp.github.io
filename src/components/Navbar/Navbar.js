import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
            <li><NavLink to="/">Accueil</NavLink></li>
            <li><NavLink to="/reservation">Réservation</NavLink></li>
            <li><NavLink to="/recherche">Rechercher un Voyage</NavLink></li>
            <li><NavLink to="/contact">Nous-Contactez</NavLink></li>
            <li><NavLink to="/about">A propos</NavLink></li>
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
