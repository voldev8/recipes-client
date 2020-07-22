import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './components/Home';

import RecipeState from './context/recipe/recipeState';
import AlertState from './context/alert/alertState';

import './App.css';

const App = () => {
  return (
    <RecipeState>
      <AlertState>
        <Router>
          <div className="App">
            <Home />
          </div>
        </Router>
      </AlertState>
    </RecipeState>
  );
};

export default App;
