import React from 'react';
import axios from 'axios';

import recipeContext from '../recipe/recipeContext';
import recipeReducer from '../recipe/recipeReducer';

import {
  GET_RECIPES,
  ADD_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE,
} from '../types';
import { useReducer } from 'react';

const RecipeState = (props) => {
  const initialState = {
    recipes: null,
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

  return (
    <recipeContext.Provider
      value={{ recipes: state.recipes, getRecipes, addRecipe, deleteRecipe }}
    >
      {props.children}
    </recipeContext.Provider>
  );
};

export default RecipeState;
