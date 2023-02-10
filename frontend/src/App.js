import React from 'react';
import './App.css';
// import Home from './components/Home';
// import { AdminView } from './Components/AdminView/AdminView';
import { Header } from './Components/Header/Header'
import { Languages } from './Components/Languages/Languages';
import { MyWork } from './Components/MyWork/MyWork';
// import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Header></Header>
      <About />
      <Languages></Languages>
      <MyWork></MyWork>
      <Contact />
      {/* <AdminView></AdminView> */}

    </div>

  );
}

export default App;
