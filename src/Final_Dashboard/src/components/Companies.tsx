import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2, X } from 'lucide-react';
import '../styles/Companies.css';

interface Company {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  
}

const initialCompanies: Company[] = [];

const Companies = () => {
  const [companies, setCompanies] = useState<Company[]>(initialCompanies);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingCompany, setEditingCompany] = useState<Partial<Company>>({});
  const [isEditing, setIsEditing] = useState(false);

  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const resetForm = () => {
    setEditingCompany({});
    setIsEditing(false);
    setShowModal(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const companyData = {
      ...editingCompany,
      id: editingCompany.id || String(Date.now()),
      
    } as Company;

    if (isEditing) {
      setCompanies(companies.map(company => 
        company.id === companyData.id ? companyData : company
      ));
    } else {
      setCompanies([...companies, companyData]);
    }

    resetForm();
  };

  const handleEdit = (company: Company) => {
    setEditingCompany(company);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleDelete = (companyId: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette compagnie ?')) {
      setCompanies(companies.filter(company => company.id !== companyId));
    }
  };

  const handleRouteChange = (value: string) => {
    const routes = value.split(',').map(route => route.trim()).filter(Boolean);
    setEditingCompany(prev => ({ ...prev, routes }));
  };

  return (
    <div className="companies-container">
      <div className="companies-header">
        <h2>Compagnies de Transport</h2>
        <div className="header-actions">
          <div className="search-bar">
            <Search size={20} />
            <input
              type="text"
              placeholder="Rechercher une compagnie..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button 
            className="add-button"
            onClick={() => {
              resetForm();
              setShowModal(true);
            }}
          >
            <Plus size={20} />
            Ajouter une compagnie
          </button>
        </div>
      </div>

      <div className="companies-table">
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Adresse</th>
              <th>Téléphone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCompanies.map(company => (
              <tr key={company.id}>
                <td>{company.name}</td>
                <td>{company.address}</td>
                <td>{company.phone}</td>
                <td>{company.email}</td>
                {/* <td>
                  <ul className="routes-list">
                    {company.routes.map((route, index) => (
                      <li key={index}>{route}</li>
                    ))}
                  </ul>
                </td> */}
                <td className="actions">
                  <button 
                    className="icon-button"
                    onClick={() => handleEdit(company)}
                  >
                    <Edit2 size={16} />
                  </button>
                  <button 
                    className="icon-button delete"
                    onClick={() => handleDelete(company.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>{isEditing ? 'Modifier la compagnie' : 'Ajouter une compagnie'}</h3>
              <button className="close-button" onClick={resetForm}>
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nom de la compagnie</label>
                <input
                  type="text"
                  value={editingCompany.name || ''}
                  onChange={e => setEditingCompany({...editingCompany, name: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Adresse</label>
                <input
                  type="text"
                  value={editingCompany.address || ''}
                  onChange={e => setEditingCompany({...editingCompany, address: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Téléphone</label>
                <input
                  type="tel"
                  value={editingCompany.phone || ''}
                  onChange={e => setEditingCompany({...editingCompany, phone: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={editingCompany.email || ''}
                  onChange={e => setEditingCompany({...editingCompany, email: e.target.value})}
                  required
                />
              </div>
              {/* <div className="form-group">
                <label>Trajets (séparés par des virgules)</label>
                <textarea
                  value={editingCompany.routes?.join(', ') || ''}
                  onChange={e => handleRouteChange(e.target.value)}
                  placeholder="Paris-Lyon, Lyon-Marseille"
                />
              </div> */}
              <div className="form-buttons">
                <button type="submit" className="submit-button">
                  {isEditing ? 'Modifier' : 'Ajouter'}
                </button>
                <button 
                  type="button" 
                  className="cancel-button"
                  onClick={resetForm}
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Companies;