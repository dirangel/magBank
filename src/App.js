import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cartao from './components/Cartao';
import CardList from './components/CardList';
import ButtonCenter from './components/ButtonCenter';
import "./App.scss";

import posts from './data/posts';



const App = () => (
    <div className="App">
      <Navbar />
      <Hero />
      <Cartao />
      <CardList posts={posts}/>
      <ButtonCenter>Abra sua conta</ButtonCenter>
    </div>
);


export default App;
