import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Import ThemeProvider et createTheme
import CssBaseline from '@mui/material/CssBaseline'; // Pour réinitialiser les styles
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Footer from './components/Footer';
import Home from './components/Home';
import Section from './components/Section';
import "./i18n"; // Importez le fichier de configuration

import './App.css';
const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif', // Définir Poppins comme police principale
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Réinitialise les styles par défaut */}
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Home />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section />
          <Section5 />
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
