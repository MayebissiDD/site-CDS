import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AppBar from '../components/Navbar';
import Footer from '../components/Footer';

function RequestQuoteForm() {
  const [services, setServices] = useState({
    webDevelopment: false,
    mobileDevelopment: false,
    digitalMarketing: false,
    cloudServices: false,
    securityAudit: false,
  });

  const [projectDescription, setProjectDescription] = useState('');
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
  });

  const [showSummary, setShowSummary] = useState(false);

  const handleServiceChange = (e) => {
    setServices({ ...services, [e.target.name]: e.target.checked });
  };

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleContactChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSummary(true);
  };

  const handleFinalSubmit = () => {
    // Logic to submit the form data
    console.log('Form submitted', { services, projectDescription, todos, contactInfo });
  };

  return (
    <>
    <AppBar/>
    <section className="bg-gray-100 ">
      <div className="container mx-auto">
        {!showSummary ? (
          <motion.form
            className="p-8 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
          >
            <h2 className="mb-6 text-3xl font-bold text-center text-first-color">
              Demandez un Devis
            </h2>

            <div className="mb-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Sélectionnez les services souhaités :
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {Object.keys(services).map((service) => (
                  <label key={service} className="flex items-center">
                    <input
                      type="checkbox"
                      name={service}
                      checked={services[service]}
                      onChange={handleServiceChange}
                      className="w-5 h-5 text-second-color focus:ring-first-color"
                    />
                    <span className="ml-2 capitalize">{service.replace(/([A-Z])/g, ' $1')}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Décrivez-nous votre projet :
              </h3>
              <textarea
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                className="w-full p-4 border rounded-md resize-none focus:ring-first-color"
                placeholder="Expliquez en quelques mots les objectifs de votre projet..."
                rows="4"
              ></textarea>
            </div>

            <div className="mb-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Ajouter des détails supplémentaires :
              </h3>
              <div className="flex items-center mb-4">
                <input
                  type="text"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  className="flex-grow p-2 border rounded-l-md"
                  placeholder="Ajouter une fonctionnalité ou un détail..."
                />
                <button
                  type="button"
                  onClick={addTodo}
                  className="px-4 py-2 text-white bg-first-color rounded-r-md hover:bg-second-color"
                >
                  Ajouter
                </button>
              </div>
              <ul>
                {todos.map((todo, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between p-2 mb-2 bg-gray-200 rounded"
                  >
                    <span>{todo}</span>
                    <button
                      type="button"
                      onClick={() => removeTodo(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Supprimer
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Informations de contact :
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  value={contactInfo.name}
                  onChange={handleContactChange}
                  className="p-2 border rounded-md"
                  placeholder="Nom complet"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={contactInfo.email}
                  onChange={handleContactChange}
                  className="p-2 border rounded-md"
                  placeholder="Adresse e-mail"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={contactInfo.phone}
                  onChange={handleContactChange}
                  className="p-2 border rounded-md"
                  placeholder="Numéro de téléphone"
                  required
                />
                <select
                  name="type"
                  value={contactInfo.type}
                  onChange={handleContactChange}
                  className="p-2 border rounded-md"
                  required
                >
                  <option value="" disabled>
                    Type de client
                  </option>
                  <option value="personal">Personnel</option>
                  <option value="business">Entreprise</option>
                  <option value="government">Ministère</option>
                </select>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 text-white rounded-md bg-first-color hover:bg-second-color"
              >
                Voir le Récapitulatif
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            className="p-8 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold text-center text-first-color">
              Récapitulatif de Votre Demande
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Services sélectionnés :</h3>
              <ul className="list-disc list-inside">
                {Object.keys(services)
                  .filter((service) => services[service])
                  .map((service) => (
                    <li key={service} className="ml-4">
                      {service.replace(/([A-Z])/g, ' $1')}
                    </li>
                  ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Description du projet :</h3>
              <p className="ml-4">{projectDescription}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Détails supplémentaires :</h3>
              <ul className="list-disc list-inside">
                {todos.map((todo, index) => (
                  <li key={index} className="ml-4">
                    {todo}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Informations de contact :</h3>
              <div className="ml-4">
                <p><strong>Nom :</strong> {contactInfo.name}</p>
                <p><strong>Email :</strong> {contactInfo.email}</p>
                <p><strong>Téléphone :</strong> {contactInfo.phone}</p>
                <p><strong>Type de client :</strong> {contactInfo.type}</p>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={() => setShowSummary(false)}
                className="px-8 py-3 text-white bg-gray-500 rounded-md hover:bg-gray-700"
              >
                Modifier
              </button>
              <button
                onClick={handleFinalSubmit}
                className="px-8 py-3 text-white rounded-md bg-first-color hover:bg-second-color"
              >
                                Soumettre
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default RequestQuoteForm;
