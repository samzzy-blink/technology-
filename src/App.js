import Navbar from './components/Navbar';
import './Style/index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Routes} from 'react-router-dom'
import Home from './pages';
import About from './pages/about';
import Services from './pages/Services'
import Contact from './pages/contact';
import Demo from './pages/demo';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
      </Routes>
      <Routes>
        <Route path='/about' element={<About/>} /> 
      </Routes>
      <Routes>
        <Route path='/services' element={<Services/>} />
      </Routes>
      <Routes>
        <Route path='/contact' element={<Contact/>} /> 
      </Routes>
      <Routes>
        <Route path='/signin' element={<Demo/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
