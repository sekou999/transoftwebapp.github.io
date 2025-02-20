import React from 'react';
import styles from "./Compagnies.module.css";
function Companies() {
  const companies = [
    {
<<<<<<< HEAD
      imgSrc: '/img/sonef_trans.jpeg',
=======
      imgSrc: 'img/sonef_trans.jpeg',
>>>>>>> 17fb87993fd7be3893e720356ca62f90e1d5ee86
      name: 'SONEF Trans',
      description: 'Voyagez confortablement à travers le pays'
    },
    {
<<<<<<< HEAD
      imgSrc: '/img/diarra_transport.jpeg',
=======
      imgSrc: 'img/diarra_transport.jpeg',
>>>>>>> 17fb87993fd7be3893e720356ca62f90e1d5ee86
      name: 'Diarra Trans',
      description: 'La sécurité et le confort au cœur de nos services'
    },
    {
<<<<<<< HEAD
      imgSrc: '/img/Africa tour trans.gif',
=======
      imgSrc: 'img/Africa tour trans.gif',
>>>>>>> 17fb87993fd7be3893e720356ca62f90e1d5ee86
      name: 'Africa Tour Trans',
      description: 'Découvrez l\'Afrique à travers nos circuits'
    },
    {
<<<<<<< HEAD
      imgSrc: '/img/SAMA_Trans.jpeg',
=======
      imgSrc: 'img/SAMA_Trans.jpeg',
>>>>>>> 17fb87993fd7be3893e720356ca62f90e1d5ee86
      name: 'SAMA Trans',
      description: 'Votre passerelle vers les destinations sahéliennes'
    }
  ];

  return (
    <section className={styles.Companies} id="companies">
      <div className={styles.OurPartners}>
<<<<<<< HEAD
        <h1 class="text-center mb-5" className={styles.nosCompagnies}>Nos Compagnies Partenaires</h1>
=======
        <h1 className={styles.nosCompagnies}>Nos Compagnies Partenaires</h1>
>>>>>>> 17fb87993fd7be3893e720356ca62f90e1d5ee86
      </div>
      
      <div className={styles.companies}>
        {companies.map((company, index) => (
          <div className={styles.compagniesGrid} key={index}>
            <img src={company.imgSrc} alt={`${company.name} Logo`} width="250" height="200" />
            <div className={styles.compagnyInfo}>
              <h3>{company.name}</h3>
              <p>{company.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Companies;
