import React from 'react';
import axios from 'axios';

import recipeContext from '../recipe/recipeContext';
import recipeReducer from '../recipe/recipeReducer';

import {
  GET_RECIPES,
  ADD_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE,
  SEARCH_RECIPE_BY_NAME,
  SEARCH_RECIPE_BY_TAG,
} from '../types';
import { useReducer } from 'react';

const RecipeState = (props) => {
  const initialState = {
    recipes: [],
    filtered: null,
  };

  const [state, dispatch] = useReducer(recipeReducer, initialState);

  // Get Recipes
  const getRecipes = async () => {
    try {
      const res = await axios.get('/recipes');

      dispatch({
        type: GET_RECIPES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // Add Recipe
  const addRecipe = async (recipe) => {
    try {
      const res = await axios.post(`/recipes`, recipe, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      dispatch({
        type: ADD_RECIPE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // Add Recipe
  const updateRecipe = async (recipe) => {
    try {
      const res = await axios.put(`/recipes/${recipe._id}`, recipe, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      dispatch({
        type: UPDATE_RECIPE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // Delete Recipe
  const deleteRecipe = async (id) => {
    try {
      await axios.delete(`/recipes/${id}`);

      dispatch({
        type: DELETE_RECIPE,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // Recipe Search by name
  const searchRecipeByName = async (text) => {
    try {
      dispatch({
        type: SEARCH_RECIPE_BY_NAME,
        payload: text,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // Recipe Search by tag
  const searchRecipeByTag = async (text) => {
    try {
      dispatch({
        type: SEARCH_RECIPE_BY_TAG,
        payload: text,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <recipeContext.Provider
      value={{
        recipes: state.recipes,
        filtered: state.filtered,
        getRecipes,
        addRecipe,
        updateRecipe,
        deleteRecipe,
        searchRecipeByName,
        searchRecipeByTag,
      }}
    >
      {props.children}
    </recipeContext.Provider>
  );
};

export default RecipeState;
