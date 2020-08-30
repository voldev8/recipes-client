import React, { useState, useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import Input from '../components/Input';

import RecipeContext from '../context/recipe/recipeContext';
import AlertContext from '../context/alert/alertContext';
import AuthContext from '../context/auth/authContext';

import './RecipeForm.css';

const RecipeEdit = (props) => {
  const recipeContext = useContext(RecipeContext);
  const { currentRecipe, updateRecipe } = recipeContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState(['']);
  const [instructions, setInstructions] = useState(['']);
  const [tags, setTags] = useState(['']);
  const [image, setImage] = useState(
    'https://media.istockphoto.com/vectors/smiling-chef-face-vector-id533998629?k=6&m=533998629&s=612x612&w=0&h=vnud6hVo61ORPVmLuoPOFFMHTdAyM1YorfgINRLnurY='
  );
  const [link, setLink] = useState('');
  const [createdBy, setCreatedBy] = useState('');

  const [uploadImage, setUpload] = useState(null);
  const [imageId, setImageId] = useState('');

  useEffect(() => {
    if (currentRecipe) {
      setName(currentRecipe.name);
      setIngredients(currentRecipe.ingredients);
      setInstructions(currentRecipe.instructions);
      setTags(currentRecipe.tags);
      setImage(currentRecipe.image);
      setLink(currentRecipe.link);
    }
    setCreatedBy(user && user.data._id);
    setImageId(uuidv4());
  }, [currentRecipe, user]);

  const handleSelectedImage = (e) => {
    e.preventDefault();
    setUpload(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      //check if user is the creator
      if (currentRecipe.createdBy === createdBy) {
        updateRecipe({
          id: currentRecipe._id,
          name,
          ingredients,
          instructions,
          tags: tags.map((tag) => tag.toLowerCase()),
          image,
          link,
        });
        if (uploadImage) {
          //photo upload to aws
          let formData = new FormData();
          formData.append(
            'file',
            uploadImage,
            uploadImage.name.split('.')[0] +
              imageId +
              '.' +
              uploadImage.name.split('.')[1]
          );
          axios
            .post(`/recipes/photo-upload`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            })
            .catch((error) => {
              alert('Oops some error happened, please try again');
            });
        }
        setAlert('Your Changes saved successfully', 'add');
        setTimeout(() => {
          props.history.push('/recipes');
        }, 1500);
      } else {
        setAlert('You can not edit this recipe.', 'add');
        props.history.push('/');
      }
      localStorage.removeItem('edit_id');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="recipe-form-outer">
      <form className="recipe-form" onSubmit={handleSubmit}>
        <div className="row">
          <label htmlFor="name">
            <p>recipe name:</p>
          </label>
          <input
            className="recipe-input"
            type="text"
            name="name"
            id="name"
            value={name}
            required
            autoFocus
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <Input
          input_type={ingredients}
          fn={setIngredients}
          rowType={'ingredients'}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <Input
          input_type={instructions}
          fn={setInstructions}
          rowType={'instructions'}
          onChange={(e) => setInstructions(e.target.value)}
        />
        <Input
          input_type={tags}
          fn={setTags}
          rowType={'tags'}
          onChange={(e) => setTags(e.target.value)}
        />

        <div className="row">
          <label htmlFor="image">
            <p>image:</p>{' '}
          </label>
          <input
            className="recipe-input"
            type="file"
            name="image"
            id="image"
            onChange={(e) => {
              setImage(
                `https://flavorites.s3.amazonaws.com/${
                  e.target.value.split('\\')[2].split('.')[0] +
                  imageId +
                  '.' +
                  e.target.value.split('\\')[2].split('.')[1]
                }`
              );
              handleSelectedImage(e);
            }}
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
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div className="row">
          <input
            className="recipe-submit-btn"
            type="submit"
            value="Save Changes"
          />
        </div>
      </form>
    </div>
  );
};

export default withRouter(RecipeEdit);
