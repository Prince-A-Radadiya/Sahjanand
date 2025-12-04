import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Admission from './Pages/Admission';
import Faculty from './Pages/Faculty';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Header from './Component/Header';
import Footer from './Component/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/admission' element={<Admission />} />
        <Route path='/faculty' element={<Faculty />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
