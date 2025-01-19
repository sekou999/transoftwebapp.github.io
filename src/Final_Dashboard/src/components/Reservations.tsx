import React, { useState } from 'react';
import { Search } from 'lucide-react';
import '../styles/Reservations.css';

interface Reservation {
  id: string;
  name: string;
  departure: string;
  departureTime: string;
  destination: string;
  status: 'confirmer' | 'En attente' | 'Annuler';
  company: string;
  price: number;
}

const mockReservations: Reservation[] = [
  {
    id: '1',
    name: 'Ibrahim Doumbia',
    departure: 'Bamako',
    departureTime: '08:00',
    destination: 'Sikasso',
    status: 'confirmer',
    company: 'Sonef Trans',
    price: 1000
  },
  {
    id: '2',
    name: 'Mariam Diallo',
    departure: 'Bamako',
    departureTime: '10:30',
    destination: 'Accra',
    status: 'En attente',
    company: 'Tilemsi Trans',
    price: 1000
  },
  {
    id: '3',
    name: 'Fatimata Keita',
    departure: 'Dakar',
    departureTime: '14:15',
    destination: 'Bamako',
    status: 'confirmer',
    company: 'Africa Tour Trans',
    price: 1000
  },
  {
    id: '4',
    name: 'Seydou Traore',
    departure: 'Sikasso',
    departureTime: '16:45',
    destination: 'Segou',
    status: 'confirmer',
    company: 'Diarra Trans',
    price: 1000
  }
];

const Reservations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [reservations, setReservations] = useState<Reservation[]>(mockReservations);

  const filteredReservations = reservations.filter(reservation => 
    reservation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reservation.departure.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reservation.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reservation.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalReservations = reservations.length;
  const confirmerReservations = reservations.filter(r => r.status === 'confirmer').length;
  const confirmationRate = (confirmerReservations / totalReservations * 100).toFixed(1);
  const totalRevenue = reservations
    .filter(r => r.status === 'confirmer')
    .reduce((sum, r) => sum + r.price, 0);

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'confirmer': return 'status-confirmer';
      case 'En attente': return 'status-En-attente';
      case 'Annuler': return 'status-Annuler';
      default: return '';
    }
  };

  return (
    <div className="reservations-container">
      <div className="search-section">
        <div className="search-bar">
          <Search size={20} />
          <input
            type="text"
            placeholder="Rechercher par nom, ville, compagnie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="reservations-table">
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Départ</th>
              <th>Destination</th>
              <th>Statut</th>
              <th>Compagnie</th>
              <th>Prix</th>
            </tr>
          </thead>
          <tbody>
            {filteredReservations.map(reservation => (
              <tr key={reservation.id}>
                <td>{reservation.name}</td>
                <td>{`${reservation.departure} - ${reservation.departureTime}`}</td>
                <td>{reservation.destination}</td>
                <td>
                  <span className={`status ${getStatusClass(reservation.status)}`}>
                    {reservation.status}
                  </span>
                </td>
                <td>{reservation.company}</td>
                <td>{reservation.price} FCFA</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="statistics-section">
        <div className="stat-card">
          <h3>Total des réservations</h3>
          <p>{totalReservations}</p>
        </div>
        <div className="stat-card">
          <h3>Taux de confirmation</h3>
          <p>{confirmationRate}%</p>
        </div>
        <div className="stat-card">
          <h3>Revenu total</h3>
          <p>{totalRevenue} FCFA</p>
        </div>
      </div>
    </div>
  );
};

export default Reservations;