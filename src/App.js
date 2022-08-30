import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Contact from "./components/Contact"; 
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Resume from './components/Resume';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Header></Header>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Portfolio' element={<Portfolio/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Resume' element={<Resume/>} />
        <Route path='/' element={<Home />} />
      </Routes>
     <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
