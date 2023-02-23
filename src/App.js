import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';

import { Box } from '@mui/system';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
      <Box>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
      </Box>
  );
}

export default App;
