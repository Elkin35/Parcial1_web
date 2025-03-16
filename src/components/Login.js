import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ login: username, password }),
    });
    const data = await response.json();
    if (response.status === 200) {
      navigate('/robots');
    } else {
      setError("Error");
    }
  };

  return (
    <main className="text-center justify-content-center row">
      <div className="col-6">
        <h2 className="fw-bolder fs-2">
          <FormattedMessage id="login.title" defaultMessage="Inicio de sesión" />
        </h2>
        <form className="my-4" onSubmit={handleSubmit}>
          <div className="text-start">
            <div>
              <label htmlFor="username" className="form-label fw-semibold fs-5">
                <FormattedMessage id="login.username" defaultMessage="Nombre de usuario" />
              </label>
              <input
                type="text"
                className={`form-control custom-input ${error ? 'is-invalid' : ''}`}
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label mt-3 fw-semibold fs-5">
                <FormattedMessage id="login.password" defaultMessage="Contraseña" />
              </label>
              <input
                type="password"
                className={`form-control custom-input ${error ? 'is-invalid' : ''}`}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-between mt-4">
              <button type="submit" className="custom-btn blue-btn">
                <FormattedMessage id="login.submit" defaultMessage="Ingresar" />
              </button>
              <button type="button" className="custom-btn red-btn">
                <FormattedMessage id="login.cancel" defaultMessage="Cancelar" />
              </button>
            </div>
            {error && <div className="text-danger m-3 fw-bold">
              <FormattedMessage id="login.error" defaultMessage="Error de autenticación. Revise sus credenciales" />
            </div>}
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
