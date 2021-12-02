import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import '../src/assets/scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import LandingPage from './components/main_page/LandingPage';
import Interstellar from './components/movies/Interstellar';
import Intouchables from './components/movies/Intouchables';
import Jumanji from './components/movies/Jumanji';
import SanAndreas from './components/movies/SanAndreas';
import Venom from './components/movies/Venom';
import Help from './components/Help';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' exact element={<LandingPage />} />
        <Route path='/movie/interstellar' element={<Interstellar />} />
        <Route path='/movie/intouchables' element={<Intouchables />} />
        <Route path='/movie/jumanji' element={<Jumanji />} />
        <Route path='/movie/san%20andreas' element={<SanAndreas />} />
        <Route path='/movie/venom' element={<Venom />} />
        <Route path='/help' element={<Help />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

