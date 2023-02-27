import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import "./app.scss"
import { Box } from '@mui/system';
import { Routes, Route } from 'react-router-dom'
import Topbar from './components/topbar';
import PageNotFound from './pages/pageNotFound';

function App() {
  return (
      <Box sx={{overflow:"hidden", minWidth:"1000px", width:"100%", height:"100%"}}>
          <Topbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
      </Box>
  );
}

export default App;
