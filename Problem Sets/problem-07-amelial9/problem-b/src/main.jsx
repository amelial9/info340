import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import SAMPLE_DOGS from './data/dogs.json'; //a sample list of dogs (model)
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App pets={SAMPLE_DOGS} />
);