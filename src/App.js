import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Robots from './components/Robots';
import { FormattedMessage } from 'react-intl';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/robots" element={<Robots />} />
        </Routes>
        <footer className="mt-4 text-center">
          <p><FormattedMessage id='footer.contactanos' />: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;