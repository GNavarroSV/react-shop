import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import ShoesDetails from './components/ShoesDetails';
import Services from './components/pages/Services';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path = "/" element ={<Home/>}/>
      </Routes>
      <Routes>
        <Route path = "/products" element = {<Products/>}/>
      </Routes>
      <Routes>
      <Route 
          path = "/shoes/:id" 
          element = {<ShoesDetails/>}/>
      </Routes>
      <Routes>
          <Route path = "/services" element = {<Services/>}/>
      </Routes>
       <Footer/>
    </Router>
      
    </>
  ); 
}

export default App;
