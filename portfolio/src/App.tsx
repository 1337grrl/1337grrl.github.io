import Box from '@mui/material/Box';
import './App.css'
import Playground from './components/Playgound'

function App() {
  return (
    <>
      <Box>
          <Playground
            code='This is a string.'
          />
        </Box>
    </>
  );
}

export default App
