import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      {/* Barra de navegación */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">Mi App</a>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="container mt-4">
        <h1 className="text-center">¡Bienvenido a mi App con Bootstrap!</h1>

        {/* Tarjeta con Bootstrap */}
        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title">Tarjeta de Ejemplo</h5>
            <p className="card-text">
              Esta es una tarjeta de prueba con Bootstrap en React.
            </p>
            <button className="btn btn-primary">Haz clic aquí</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
