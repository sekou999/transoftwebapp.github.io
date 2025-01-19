import React from 'react';
import ResultCards from './ResultCards';
import styles from './SearchResults.module.css';

function SearchResults() {
  return (
    <div className={styles.searchResults}>
      <h2>Résultats de recherche</h2>
      <p>Trajet : Bamako - Segou</p>
      <p>Date : 11/05/2024</p>
      
      <div className={styles.resultCardsContainer}>
        {/* Exemple de cartes avec données fournies directement */}
        <ResultCards company="SONEF TRANS" departure="Bamako" arrival="Segou" date="11/05/2024" time="10h - 30min" price="5000 FCFA" />
        <ResultCards company="DIARRA TRANS" departure="Bamako" arrival="Segou" date="11/05/2024" time="08h - 15min" price="4500 FCFA" />
        <ResultCards company="AFRICA TOUR TRANS" departure="Bamako" arrival="Segou" date="11/05/2024" time="12h - 45min" price="6000 FCFA" />
        <ResultCards company="SAMA" departure="Bamako" arrival="Segou" date="11/05/2024" time="12h - 45min" price="5000 FCFA" />
        
        {/* Exemple d'une carte avec une information manquante */}
        {/* <ResultCards company="EXEMPLE TRANS" departure="Bamako" arrival="Segou" date="11/05/2024" time="09h - 00min" price="" /> */}
      </div>
    </div>
  );
}

export default SearchResults;

  // import React from 'react';
  // import ResultCards from './ResultCards';
  // import styles from './SearchResults.module.css'
  
  // function SearchResults() {
  //   const results = [
  //     { company: 'SONEF TRANS', departure: 'Bamako', arrival: 'Segou', date: '11/05/2024', time: '10h - 30min', price: '15000 FCFA' },
  //     { company: 'DIARRA TRANS', departure: 'Bamako', arrival: 'Segou', date: '11/05/2024', time: '08h - 15min', price: '14500 FCFA' },
  //     { company: 'AFRICA TOUR TRANS', departure: 'Bamako', arrival: 'Segou', date: '11/05/2024', time: '12h - 45min', price: '16000 FCFA' },
  //   ];
  //   return (
  //     <div className={styles.searchResults}>
  //       <h2>Résultats de recherche</h2>
  //       <p>Trajet : Bamako - Segou</p>
  //       <p>Date : 11/05/2024</p>
  //         <div className={styles.resultCardsContainer}>
  //         {results.map((result, index) => (
  //             <ResultCards key={index} {...result} />
  //         ))}
  //         </div>
  //     </div>
  //   );
  // }
  
  // export default SearchResults;
