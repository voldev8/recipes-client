import React, { useContext, useState } from 'react';
import RecipeContext from '../context/recipe/recipeContext';
import './Search.css';

function Search() {
  const recipeContext = useContext(RecipeContext);
  const [searchType, setSearchType] = useState('Name');

  const { searchRecipeByName, searchRecipeByTag } = recipeContext;

  const handleToggle = () => {
    searchType === 'Name' ? setSearchType('Tag') : setSearchType('Name');
  };
  const handleChange = (e) => {
    searchType === 'Tag'
      ? searchRecipeByTag(e.target.value)
      : searchRecipeByName(e.target.value);
  };

  return (
    <div className="search_outer">
      <input
        className="search"
        type="search"
        placeholder={`Search Recipes by ${searchType}`}
        onChange={handleChange}
      />
      <div className="switch_outer"></div>
      <span>Name</span>
      <label className="switch">
        <input type="checkbox" onClick={handleToggle} />
        <span className="slider"></span>
      </label>
      <span>Tag</span>
      {/* <button onClick={handleToggle} className="toggleBtn">
        Switch to search by {searchType === 'Name' ? 'Tag' : 'Name'}
      </button> */}
    </div>
  );
}

export default Search;
