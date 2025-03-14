import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login: username, password }),
    });

    const data = await response.json();

    if (response.status === 200) {
      navigate('/robots');
    } else {
      setError("Error de autenticación. Revise sus credenciales");
    }
  };

  return (
    <main className="text-center">
      <h2>Inicio de sesión</h2>
      <form className="my-4" onSubmit={handleSubmit}>
        <div className="text-start">
            <div>
          <label htmlFor="username" className="form-label">Nombre de usuario</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label mt-3">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        </div>
        
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary me-2">Ingresar</button>
          <button type="button" className="btn btn-danger">Cancelar</button>
        </div>
        {error && <div className="text-danger m-3">{error}</div>}
      </form>
    </main>
  );
}

export default Login;