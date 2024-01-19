import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {Route, Routes,Redirect} from "react-router-dom"
import About from './Components/About';
import  Home from './Components/Home';
import Contact from './Components/Contact';
import Service from './Components/Service';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/about' Component={About}/>
        <Route exact path='/contact' Component={Contact}/>
        <Route exact path='/service' Component={Service}/>
        {/* <Redirect to='/'/> */}
      </Routes>
      <div className='footer'>
      <Footer/>
      </div>
    </>
  );
}

export default App;
