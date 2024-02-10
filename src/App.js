import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';


function App() {
  return (
    <div className='app'>
      <Navbar />
      <Home />
      <Footer />

    </div>
    
  );
}



export default App;
