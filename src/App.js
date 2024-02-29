import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Pricing from './pages/pricing';
import About from './pages/about';
import Blogs from './pages/blogs';
import Contact from './pages/contact';
import Blog from './pages/blog-posts/blog1';
import Blog2 from './pages/blog-posts/blog2';
import Blog3 from './pages/blog-posts/blog3';
import Blog4 from './pages/blog-posts/blog4';



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
            <Route path='blog-posts/blog1' element={<Blog />} />
            <Route path='/blog-posts/blog2' element={<Blog2 />} />
            <Route path='/blog-posts/blog3' element={<Blog3 />} />
            <Route path='/blog-posts/blog4' element={<Blog4 />} />
          </Routes>
        <Footer />
      </Router>

    </div>
    
  );
}



export default App;
