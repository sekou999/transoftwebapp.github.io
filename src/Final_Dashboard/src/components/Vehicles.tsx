// import React, { useState } from 'react';
// import { Search, Plus, Edit2, Trash2 } from 'lucide-react';
// import '../styles/Vehicles.css';

// interface Vehicle {
//   id: string;
//   name: string;
//   capacity: number;
//   status: 'available' | 'in-service' | 'maintenance';
//   company: string;
// }

// interface Trip {
//   id: string;
//   departure: string;
//   arrival: string;
//   departureDate: string;
//   departureTime: string;
//   price: number;
//   vehicleId: string;
//   company: string;
// }

// const initialVehicles: Vehicle[] = [
//   { id: '1', name: 'Bus 101', capacity: 50, status: 'available', company: 'TransExpress' },
//   { id: '2', name: 'Bus 102', capacity: 45, status: 'in-service', company: 'RapidBus' },
//   { id: '3', name: 'Bus 103', capacity: 55, status: 'maintenance', company: 'TransExpress' }
// ];

// const initialTrips: Trip[] = [
//   {
//     id: '1',
//     departure: 'Paris',
//     arrival: 'Lyon',
//     departureDate: '2024-03-20',
//     departureTime: '08:00',
//     price: 45,
//     vehicleId: '1',
//     company: 'TransExpress'
//   },
//   {
//     id: '2',
//     departure: 'Lyon',
//     arrival: 'Marseille',
//     departureDate: '2024-03-21',
//     departureTime: '10:30',
//     price: 35,
//     vehicleId: '2',
//     company: 'RapidBus'
//   }
// ];

// const Vehicles = () => {
//   const [vehicles, setVehicles] = useState<Vehicle[]>(initialVehicles);
//   const [trips, setTrips] = useState<Trip[]>(initialTrips);
//   const [selectedCompany, setSelectedCompany] = useState<string>('');
//   const [selectedStatus, setSelectedStatus] = useState<string>('');
//   const [showTripForm, setShowTripForm] = useState(false);
//   const [showVehicleForm, setShowVehicleForm] = useState(false);
//   const [newTrip, setNewTrip] = useState<Partial<Trip>>({});
//   const [newVehicle, setNewVehicle] = useState<Partial<Vehicle>>({});
//   const [editingTripId, setEditingTripId] = useState<string | null>(null);
//   const [editingVehicleId, setEditingVehicleId] = useState<string | null>(null);

//   const companies = ['TransExpress', 'RapidBus'];
//   const statuses = ['available', 'in-service', 'maintenance'];

//   // Gestion des véhicules
//   const resetVehicleForm = () => {
//     setNewVehicle({});
//     setEditingVehicleId(null);
//     setShowVehicleForm(false);
//   };

//   const handleEditVehicle = (vehicle: Vehicle) => {
//     setNewVehicle(vehicle);
//     setEditingVehicleId(vehicle.id);
//     setShowVehicleForm(true);
//   };

//   const handleDeleteVehicle = (vehicleId: string) => {
//     if (window.confirm('Êtes-vous sûr de vouloir supprimer ce véhicule ?')) {
//       setVehicles(vehicles.filter(vehicle => vehicle.id !== vehicleId));
//     }
//   };

//   const handleVehicleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     const vehicleData = {
//       ...newVehicle,
//       id: editingVehicleId || String(Date.now())
//     } as Vehicle;

//     if (editingVehicleId) {
//       setVehicles(vehicles.map(vehicle => 
//         vehicle.id === editingVehicleId ? vehicleData : vehicle
//       ));
//     } else {
//       setVehicles([...vehicles, vehicleData]);
//     }

//     resetVehicleForm();
//   };

//   // Gestion des trajets (code existant)
//   const resetTripForm = () => {
//     setNewTrip({});
//     setEditingTripId(null);
//     setShowTripForm(false);
//   };

//   const handleEditTrip = (trip: Trip) => {
//     setNewTrip(trip);
//     setEditingTripId(trip.id);
//     setShowTripForm(true);
//   };

//   const handleDeleteTrip = (tripId: string) => {
//     if (window.confirm('Êtes-vous sûr de vouloir supprimer ce trajet ?')) {
//       setTrips(trips.filter(trip => trip.id !== tripId));
//     }
//   };

//   const handleTripSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     const tripData = {
//       ...newTrip,
//       id: editingTripId || String(Date.now()),
//       vehicleId: '1',
//       company: 'TransExpress'
//     } as Trip;

//     if (editingTripId) {
//       setTrips(trips.map(trip => 
//         trip.id === editingTripId ? tripData : trip
//       ));
//     } else {
//       setTrips([...trips, tripData]);
//     }

//     resetTripForm();
//   };

//   const filteredVehicles = vehicles.filter(vehicle => {
//     if (selectedCompany && vehicle.company !== selectedCompany) return false;
//     if (selectedStatus && vehicle.status !== selectedStatus) return false;
//     return true;
//   });

//   const getStatusClass = (status: string) => {
//     switch (status) {
//       case 'available': return 'status-available';
//       case 'in-service': return 'status-in-service';
//       case 'maintenance': return 'status-maintenance';
//       default: return '';
//     }
//   };

//   return (
//     <div className="vehicles-container">
//       <div className="vehicles-section">
//         <div className="vehicles-header">
//           <h2>Liste des véhicules</h2>
//           <div className="filters-section">
//             <select
//               className="filter-select"
//               value={selectedCompany}
//               onChange={(e) => setSelectedCompany(e.target.value)}
//             >
//               <option value="">Toutes les compagnies</option>
//               {companies.map(company => (
//                 <option key={company} value={company}>{company}</option>
//               ))}
//             </select>
//             <select
//               className="filter-select"
//               value={selectedStatus}
//               onChange={(e) => setSelectedStatus(e.target.value)}
//             >
//               <option value="">Tous les statuts</option>
//               {statuses.map(status => (
//                 <option key={status} value={status}>{status}</option>
//               ))}
//             </select>
//             <button 
//               className="add-vehicle-button"
//               onClick={() => {
//                 resetVehicleForm();
//                 setShowVehicleForm(true);
//               }}
//             >
//               <Plus size={20} /> Nouveau véhicule
//             </button>
//           </div>
//         </div>

//         {showVehicleForm && (
//           <div className="vehicle-form">
//             <h3>{editingVehicleId ? 'Modifier le véhicule' : 'Ajouter un nouveau véhicule'}</h3>
//             <form onSubmit={handleVehicleSubmit}>
//               <div className="form-group">
//                 <label>Nom du véhicule</label>
//                 <input
//                   type="text"
//                   value={newVehicle.name || ''}
//                   onChange={e => setNewVehicle({...newVehicle, name: e.target.value})}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Capacité</label>
//                 <input
//                   type="number"
//                   value={newVehicle.capacity || ''}
//                   onChange={e => setNewVehicle({...newVehicle, capacity: Number(e.target.value)})}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Statut</label>
//                 <select
//                   value={newVehicle.status || ''}
//                   onChange={e => setNewVehicle({...newVehicle, status: e.target.value as Vehicle['status']})}
//                   required
//                 >
//                   <option value="">Sélectionner un statut</option>
//                   {statuses.map(status => (
//                     <option key={status} value={status}>{status}</option>
//                   ))}
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Compagnie</label>
//                 <select
//                   value={newVehicle.company || ''}
//                   onChange={e => setNewVehicle({...newVehicle, company: e.target.value})}
//                   required
//                 >
//                   <option value="">Sélectionner une compagnie</option>
//                   {companies.map(company => (
//                     <option key={company} value={company}>{company}</option>
//                   ))}
//                 </select>
//               </div>
//               <div className="form-buttons">
//                 <button type="submit" className="submit-button">
//                   {editingVehicleId ? 'Modifier' : 'Ajouter'}
//                 </button>
//                 <button 
//                   type="button" 
//                   className="cancel-button"
//                   onClick={resetVehicleForm}
//                 >
//                   Annuler
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}

//         <table>
//           <thead>
//             <tr>
//               <th>Nom</th>
//               <th>Capacité</th>
//               <th>Statut</th>
//               <th>Compagnie</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredVehicles.map(vehicle => (
//               <tr key={vehicle.id}>
//                 <td>{vehicle.name}</td>
//                 <td>{vehicle.capacity} places</td>
//                 <td>
//                   <span className={`status ${getStatusClass(vehicle.status)}`}>
//                     {vehicle.status}
//                   </span>
//                 </td>
//                 <td>{vehicle.company}</td>
//                 <td className="actions">
//                   <button 
//                     className="icon-button"
//                     onClick={() => handleEditVehicle(vehicle)}
//                   >
//                     <Edit2 size={16} />
//                   </button>
//                   <button 
//                     className="icon-button delete"
//                     onClick={() => handleDeleteVehicle(vehicle.id)}
//                   >
//                     <Trash2 size={16} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Section des trajets (code existant) */}
//       <div className="trips-section">
//         {/* ... Le reste du code pour la section des trajets reste inchangé ... */}
//       </div>
//     </div>
//   );
// };

// export default Vehicles;

import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2 } from 'lucide-react';
import '../styles/Vehicles.css';

interface Vehicle {
  id: string;
  name: string;
  capacity: number;
  status: 'available' | 'in-service' | 'maintenance';
  company: string;
}

const initialVehicles: Vehicle[] = [];


interface Trip {
  id: string;
  departure: string;
  arrival: string;
  departureDate: string;
  departureTime: string;
  price: number;
  vehicleId: string;
  company: string;
}

const initialTrips: Trip[] = [];

const Vehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>(initialVehicles);
  const [trips, setTrips] = useState<Trip[]>(initialTrips);
  const [selectedCompany, setSelectedCompany] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('');
  const [showTripForm, setShowTripForm] = useState(false);
  const [showVehicleForm, setShowVehicleForm] = useState(false);
  const [newTrip, setNewTrip] = useState<Partial<Trip>>({});
  const [newVehicle, setNewVehicle] = useState<Partial<Vehicle>>({});
  const [editingTripId, setEditingTripId] = useState<string | null>(null);
  const [editingVehicleId, setEditingVehicleId] = useState<string | null>(null);

  const companies = ['Sonef Trans', 'Diarra Trans', 'Africa Tour Trans', 'Benso Trans', ];
  const statuses = ['available', 'in-service', 'maintenance'];

  //Utilisation de local Storage
  

  // Gestion des véhicules
  const resetVehicleForm = () => {
    setNewVehicle({});
    setEditingVehicleId(null);
    setShowVehicleForm(false);
  };

  const handleEditVehicle = (vehicle: Vehicle) => {
    setNewVehicle(vehicle);
    setEditingVehicleId(vehicle.id);
    setShowVehicleForm(true);
  };

  const handleDeleteVehicle = (vehicleId: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce véhicule ?')) {
      setVehicles(vehicles.filter(vehicle => vehicle.id !== vehicleId));
    }
  };

  const handleVehicleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const vehicleData = {
      ...newVehicle,
      id: editingVehicleId || String(Date.now())
    } as Vehicle;

    if (editingVehicleId) {
      setVehicles(vehicles.map(vehicle => 
        vehicle.id === editingVehicleId ? vehicleData : vehicle
      ));
    } else {
      setVehicles([...vehicles, vehicleData]);
    }

    resetVehicleForm();
  };

  // Gestion des trajets (code existant)
  const resetTripForm = () => {
    setNewTrip({});
    setEditingTripId(null);
    setShowTripForm(false);
  };

  const handleEditTrip = (trip: Trip) => {
    setNewTrip(trip);
    setEditingTripId(trip.id);
    setShowTripForm(true);
  };

  const handleDeleteTrip = (tripId: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce trajet ?')) {
      setTrips(trips.filter(trip => trip.id !== tripId));
    }
  };

  const handleTripSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const tripData = {
      ...newTrip,
      id: editingTripId || String(Date.now()),
      vehicleId: '1',
      company: newTrip.company || ''
    } as Trip;

    if (editingTripId) {
      setTrips(trips.map(trip => 
        trip.id === editingTripId ? tripData : trip
      ));
    } else {
      setTrips([...trips, tripData]);
    }

    resetTripForm();
  };

  const filteredVehicles = vehicles.filter(vehicle => {
    if (selectedCompany && vehicle.company !== selectedCompany) return false;
    if (selectedStatus && vehicle.status !== selectedStatus) return false;
    return true;
  });
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'available': return 'status-available';
      case 'in-service': return 'status-in-service';
      case 'maintenance': return 'status-maintenance';
      default: return '';
    }
  };

  return (
    <div className="vehicles-container">
    <div className="vehicles-section">
      <div className="vehicles-header">
        <h2>Liste des véhicules</h2>
        <div className="filters-section">
          <select
            className="filter-select"
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
          >
            <option value="">Toutes les compagnies</option>
            {companies.map(company => (
              <option key={company} value={company}>{company}</option>
            ))}
          </select>
          <select
            className="filter-select"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="">Tous les statuts</option>
            {statuses.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
          <button 
            className="add-vehicle-button"
            onClick={() => {
              resetVehicleForm();
              setShowVehicleForm(true);
            }}
          >
            <Plus size={20} /> Nouveau véhicule
          </button>
        </div>
      </div>

      {showVehicleForm && (
        <div className="vehicle-form">
          <h3>{editingVehicleId ? 'Modifier le véhicule' : 'Ajouter un nouveau véhicule'}</h3>
          <form onSubmit={handleVehicleSubmit}>
            <div className="form-group">
              <label>Nom du véhicule</label>
              <input
                type="text"
                value={newVehicle.name || ''}
                onChange={e => setNewVehicle({...newVehicle, name: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Capacité</label>
              <input
                type="number"
                value={newVehicle.capacity || ''}
                onChange={e => setNewVehicle({...newVehicle, capacity: Number(e.target.value)})}
                required
              />
            </div>
            <div className="form-group">
              <label>Statut</label>
              <select
                value={newVehicle.status || ''}
                onChange={e => setNewVehicle({...newVehicle, status: e.target.value as Vehicle['status']})}
                required
              >
                <option value="">Sélectionner un statut</option>
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Compagnie</label>
              <select
                value={newVehicle.company || ''}
                onChange={e => setNewVehicle({...newVehicle, company: e.target.value})}
                required
              >
                <option value="">Sélectionner une compagnie</option>
                {companies.map(company => (
                  <option key={company} value={company}>{company}</option>
                ))}
              </select>
            </div>
            <div className="form-buttons">
              <button type="submit" className="submit-button">
                {editingVehicleId ? 'Modifier' : 'Ajouter'}
              </button>
              <button 
                type="button" 
                className="cancel-button"
                onClick={resetVehicleForm}
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Capacité</th>
            <th>Statut</th>
            <th>Compagnie</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredVehicles.map(vehicle => (
            <tr key={vehicle.id}>
              <td>{vehicle.name}</td>
              <td>{vehicle.capacity} places</td>
              <td>
                <span className={`status ${getStatusClass(vehicle.status)}`}>
                  {vehicle.status}
                </span>
              </td>
              <td>{vehicle.company}</td>
              <td className="actions">
                <button 
                  className="icon-button"
                  onClick={() => handleEditVehicle(vehicle)}
                >
                  <Edit2 size={16} />
                </button>
                <button 
                  className="icon-button delete"
                  onClick={() => handleDeleteVehicle(vehicle.id)}
                >
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
      {/* ... Le reste du code pour la section des véhicules reste inchangé ... */}

      <div className="trips-section">
        <div className="trips-header">
          <h2>Trajets programmés</h2>
          <button 
            className="add-trip-button"
            onClick={() => {
              resetTripForm();
              setShowTripForm(true);
            }}
          >
            <Plus size={20} /> Nouveau trajet
          </button>
        </div>

        {showTripForm && (
          <div className="trip-form">
            <h3>{editingTripId ? 'Modifier le trajet' : 'Ajouter un nouveau trajet'}</h3>
            <form onSubmit={handleTripSubmit}>
              <div className="form-group">
                <label>Lieu de départ</label>
                <input
                  type="text"
                  value={newTrip.departure || ''}
                  onChange={e => setNewTrip({...newTrip, departure: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Lieu d'arrivée</label>
                <input
                  type="text"
                  value={newTrip.arrival || ''}
                  onChange={e => setNewTrip({...newTrip, arrival: e.target.value})}
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Date de départ</label>
                  <input
                    type="date"
                    value={newTrip.departureDate || ''}
                    onChange={e => setNewTrip({...newTrip, departureDate: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Heure de départ</label>
                  <input
                    type="time"
                    value={newTrip.departureTime || ''}
                    onChange={e => setNewTrip({...newTrip, departureTime: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Prix du billet</label>
                <input
                  type="number"
                  value={newTrip.price || ''}
                  onChange={e => setNewTrip({...newTrip, price: Number(e.target.value)})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Compagnie</label>
                <input
                  type="text"
                  value={newTrip.company || ''}
                  onChange={e => setNewTrip({...newTrip, company: e.target.value})}
                  required
                />
              </div>
              <div className="form-buttons">
                <button type="submit" className="submit-button">
                  {editingTripId ? 'Modifier' : 'Ajouter'}
                </button>
                <button 
                  type="button" 
                  className="cancel-button"
                  onClick={resetTripForm}
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        )}

        <table>
          <thead>
            <tr>
              <th>Départ</th>
              <th>Arrivée</th>
              <th>Date</th>
              <th>Heure</th>
              <th>Prix</th>
              <th>Compagnie</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {trips.map(trip => (
              <tr key={trip.id}>
                <td>{trip.departure}</td>
                <td>{trip.arrival}</td>
                <td>{trip.departureDate}</td>
                <td>{trip.departureTime}</td>
                <td>{trip.price} FCFA</td>
                <td>{trip.company}</td>
                <td className="actions">
                  <button 
                    className="icon-button"
                    onClick={() => handleEditTrip(trip)}
                  >
                    <Edit2 size={16} />
                  </button>
                  <button 
                    className="icon-button delete"
                    onClick={() => handleDeleteTrip(trip.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vehicles;