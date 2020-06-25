import React, { useState, useContext } from 'react';

import RecipeContext from '../context/recipe/recipeContext';
import Input from './Input';

import './RecipeAdd.css';

const RecipeAdd = () => {
  const recipeContext = useContext(RecipeContext);
  const { addRecipe } = recipeContext;

  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState(['']);
  const [instructions, setInstructions] = useState(['']);
  const [tags, setTags] = useState(['']);
  const [image, setImage] = useState(
    'https://media.istockphoto.com/vectors/smiling-chef-face-vector-id533998629?k=6&m=533998629&s=612x612&w=0&h=vnud6hVo61ORPVmLuoPOFFMHTdAyM1YorfgINRLnurY='
  );
  const [link, setLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      addRecipe({
        name,
        ingredients,
        instructions,
        tags,
        image,
        link,
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="recipe-form">
      <form className="recipe-add-form" onSubmit={handleSubmit}>
        <div className="row">
          <label htmlFor="name">
            <p>recipe name:</p>
          </label>
          <input
            className="recipe-input"
            type="text"
            name="name"
            id="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <Input
          inps={ingredients}
          fn={setIngredients}
          rowType={'ingredients'}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <Input
          inps={instructions}
          fn={setInstructions}
          rowType={'instructions'}
          onChange={(e) => setInstructions(e.target.value)}
        />
        <Input
          inps={tags}
          fn={setTags}
          rowType={'tags'}
          onChange={(e) => setTags(e.target.value)}
        />

        <div className="row">
          <label htmlFor="image">
            <p>image url:</p>{' '}
          </label>
          <input
            className="recipe-input"
            type="text"
            name="image"
            id="image"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="row">
          <label htmlFor="link">
            <p>recipe link:</p>{' '}
          </label>
          <input
            className="recipe-input"
            type="text"
            name="link"
            id="link"
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div className="row">
          <input class="recipe-add-submit" type="submit" value="Add Recipe!" />
        </div>
      </form>
    </div>
  );
};

export default RecipeAdd;
