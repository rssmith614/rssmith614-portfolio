import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";

import Directory from './components/Directory'

import AboutMe from './pages/AboutMe';
import ProjectGallery from './pages/ProjectGallery';
import WorkExperience from './pages/WorkExperience';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#549fc0',
    },
    secondary: {
      main: '#0056d6',
    },
    background: {
      default: '#daeaf1',
      paper: '#c8e0ea',
    },
    text: {
      primary: '#070f13',
      secondary: '#387494',
    },
    info: {
      main: '#4394b6',
    },
  },
  shape: {
    borderRadius: 10,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Directory />
        <Routes>
          <Route path="/" element={<Navigate replace to="/about"/>} />
          <Route exact path="/about" element={<AboutMe />} />
          <Route path="/gallery" element={<ProjectGallery />} />
          <Route path="/work" element={<WorkExperience />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
