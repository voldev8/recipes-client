import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Recipelist from './components/Recipelist';
import RecipeAdd from './components/RecipeAdd';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Test from './components/Test';

import RecipeState from './context/recipe/recipeState';

import './App.css';

const App = () => {
  // const [recipes, setRecipes] = useState(null);
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
          <Route exact path="/recipe-add" component={RecipeAdd} />
          <Route exact path="/recipes" component={Recipelist} />
          <Route exact path="/test" component={Test} />
          <Footer />
        </Router>
      </RecipeState>
    </div>
  );
};

export default App;
