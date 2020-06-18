import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Recipelist from './components/Recipelist';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getRecipes();
    return () => {
      console.log('cleanup');
    };
  }, []);

  const getRecipes = async () => {
    const res = await axios.get('/recipes');
    let recipes = res.data;
    setRecipes(recipes);
    setLoading(false);
  };

  return (
    <div className="App">
      <Navbar />
      {!recipes ? (
        'loading'
      ) : (
        <Recipelist recipes={recipes} loading={loading} />
      )}
      <Footer />
    </div>
  );
}

export default App;
