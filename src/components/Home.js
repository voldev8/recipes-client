import React, { useContext, useEffect } from 'react';
import { Route } from 'react-router-dom';

import RecipeList from './RecipeList';
import RecipeAdd from './RecipeAdd';
import RecipeEdit from './RecipeEdit';
import RecipeSearch from './RecipeSearch';
import Navbar from './Navbar';
import Footer from './Footer';
import NoLink from './NoLink';

import RecipeContext from '../context/recipe/recipeContext';

import './Home.css';

const Home = () => {
  const recipeContext = useContext(RecipeContext);
  const { getRecipe, currentRecipe } = recipeContext;

  useEffect(() => {
    if (localStorage.getItem('edit_id')) {
      getRecipe(localStorage.getItem('edit_id'));
    }
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <Route exact path="/recipes" component={RecipeList} />
        <Route exact path="/recipe-add" component={RecipeAdd} />
        <Route
          path="/recipe-edit"
          render={(props) => (
            <RecipeEdit {...props} currentRecipe={currentRecipe} />
          )}
        />
        <Route exact path="/recipe-search" component={RecipeSearch} />
        <Route exact path="/no-link" component={NoLink} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
