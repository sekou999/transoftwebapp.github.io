import React from 'react';
import styles from './HeroSection.module.css'; // Import du fichier CSS Module

function HeroSection() {
  return (
    <div className={styles.hero}>
        <div className={styles.container}>
            <h2 className={styles.title}>Trouvez votre prochain voyage en quelques clics</h2>
            <div className={styles.searchForm}>
                <form id="searchForm" action="searchResult.html">
<<<<<<< HEAD
                    <input type="text" placeholder=" Départ" required className={styles.input} />
                    <input type="text" placeholder=" Destination" required className={styles.input} />
                    <input type="date" placeholder=" Date du Voyage" required className={styles.input} />
                    {/* <select required className={styles.select}>
                        <option value="">Nombre de passagers</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4+</option>
                    </select> */}
=======
                    {/* <input type="text" placeholder="Départ" required className={styles.input} /> */}
                    {/* <input type="text" placeholder="Destination" required className={styles.input} /> */}
                    <select required className={styles.input}>
                        <option value="">Départ</option>
                        <option value="Kayes">Kayes</option>
                        <option value="Koulikoro">Koulikoro</option>
                        <option value="Bamako">Bamako</option>
                        <option value="Sikasso">Sikasso</option>
                    </select>
                    <select required className={styles.input}>
                        <option value="">Destination</option>
                        <option value="Kayes">Kayes</option>
                        <option value="Koulikoro">Koulikoro</option>
                        <option value="Bamako">Bamako</option>
                        <option value="Sikasso">Sikasso</option>
                    </select>
                    <input type="date" placeholder="Date du Voyage" required className={styles.input} />
                    
                    
>>>>>>> 17fb87993fd7be3893e720356ca62f90e1d5ee86
                    <button type="submit" className={styles.button}>Rechercher</button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default HeroSection;
