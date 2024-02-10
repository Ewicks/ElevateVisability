import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Pricing from './pages/pricing';
import About from './pages/about';
import Blogs from './pages/blogs';
import Contact from './pages/contact';


function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/about' element={<About />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        <Footer />
      </Router>

    </div>
    
  );
}



export default App;
