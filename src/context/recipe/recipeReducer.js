import {
  GET_RECIPES,
  ADD_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, recipes: action.payload, loading: false };
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [action.payload, ...state.recipes],
        loading: false,
      };
    case UPDATE_RECIPE:
      return {};
    case DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter(
          (recipe) => recipe._id !== action.payload
        ),
        loading: false,
      };
    default:
      return state;
  }
};
