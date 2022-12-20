
import './App.css';
import "../src/assests/css/components/all.scss"
import Home from './WebPages/Home';
import About from './WebPages/About';
import Services from './WebPages/Services';
import Instrumentals from './WebPages/Instrumentals';
import Contact from './WebPages/Contact';
import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import HomeLayout from './layout/HomeLayout';
import Detail from './WebPages/Detail'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<HomeLayout children={<Home />}/>}/>
      <Route path="/about" element={<HomeLayout children={<About />}/>}/>
      <Route path="/services" element={<HomeLayout children={<Services />}/>}/>
      <Route path="/instrumentals" element={<HomeLayout children={<Instrumentals />}/>}/>
      <Route path="/contact" element={<HomeLayout children={<Contact />}/>}/>
      <Route path="/detail" element={<HomeLayout children={<Detail />}/>}/>

    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
