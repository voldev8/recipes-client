import React, { useContext, useEffect } from 'react';

import Recipe from './Recipe.js';
import Loading from './Loading.js';

import RecipeContext from '../context/recipe/recipeContext';

import './RecipeList.css';

const RecipeList = () => {
  const recipeContext = useContext(RecipeContext);
  const { recipes, getRecipes, filtered, loading } = recipeContext;

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <Loading />
  ) : filtered === null && recipes !== null ? (
    recipes.map((recipe) => <Recipe key={recipe._id} recipe={recipe} />)
  ) : filtered.length === 0 ? (
    <p className="no_match">Your search did not match any recipes.</p>
  ) : filtered !== null ? (
    filtered.map((recipe) => <Recipe key={recipe._id} recipe={recipe} />)
  ) : null;
};

export default RecipeList;
