import React, { Fragment, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import RecipeList from './components/RecipeList';
import RecipeAdd from './components/RecipeAdd';
import RecipeEdit from './components/RecipeEdit';
import RecipeSearch from './components/RecipeSearch';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Test from './components/Test';

import RecipeState from './context/recipe/recipeState';

import './App.css';

const App = () => {
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   getRecipes();
  //   return () => {
  //     console.log('cleanup');
  //   };
  // }, []);

  // const getRecipes = async () => {
  //   const res = await axios.get('/recipes');
  //   let recipes = res.data;
  //   setRecipes(recipes);
  //   setLoading(false);
  // };
  return (
    <div className="App">
      <RecipeState>
        <Router>
          <Navbar />
          <Route exact path="/recipes" component={RecipeList} />
          <Route exact path="/recipe-add" component={RecipeAdd} />
          <Route exact path="/recipe-edit" component={RecipeEdit} />
          <Route exact path="/recipe-search" component={RecipeSearch} />
          <Route exact path="/test" component={Test} />
          <Footer />
        </Router>
      </RecipeState>
    </div>
  );
};

export default App;
