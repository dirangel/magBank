import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cartao from './components/Cartao'
import "./App.scss";



const App = () => (
    <div className="App">
      <Navbar />
      <Hero />
      <Cartao />
    </div>
);


export default App;
