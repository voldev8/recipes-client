import React, { useContext, useEffect } from 'react';
import Recipe from './Recipe.js';

import RecipeContext from '../context/recipe/recipeContext';

import './Recipelist.css';

const Recipelist = () => {
  const recipeContext = useContext(RecipeContext);

  const { recipes, getRecipes, loading } = recipeContext;

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      {recipes !== null && !loading
        ? recipes.map((recipe) => <Recipe key={recipe._id} recipe={recipe} />)
        : 'loading'}
    </div>
  );
};

export default Recipelist;
