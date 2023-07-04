import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Err404 from './pages/Err404';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About title = "Hello world"/>} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Err404 />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
