import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import messages from './messages';
import { IntlProvider } from 'react-intl';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const locale = navigator.language.split('-')[0] === 'en' ? 'en' : 'es';
console.log(`Locale: ${locale}`);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={messages[locale]}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.unregister();
reportWebVitals();
