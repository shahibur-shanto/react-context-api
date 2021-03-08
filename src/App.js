import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Shipment from './components/Shipment/Shipment';


export const CategoryContext = createContext();

function App() {
  const [category,setCategory] = useState(0)
  
  return (
    <CategoryContext.Provider value={[category,setCategory]}>
      <p>default: {category}</p>
      <Header/>
      <Home/>
      <Shipment/>
      
    </CategoryContext.Provider>
  );
}

export default App;
