import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import Home from './components/Home';
import { Grid } from '@mui/material';
import Navigation from './components/Navigation';
import Footer from './components/Footer';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Grid container sx={{backgroundColor: 'background.default' }}>
          <Navigation/>
          <Routes>
            <Route 
              path={'/'} 
              element={<Home/>} 
            />
          </Routes>
          <Footer/>
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

export default App;
