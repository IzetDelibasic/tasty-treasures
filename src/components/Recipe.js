import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../components/Recipe.css';

export const Recipe = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const apiKey = 'd99f90a08fc4468b93c73ff138256ade';

  const fetchRecipesByQuery = (query = '') => {
    axios.get('https://api.spoonacular.com/recipes/complexSearch', {
      params: {
        apiKey: apiKey,
        query: query,
        number: 21,
      }
    })
    .then((response) => {
      const recipesData = response.data.results.map((recipe) => {
        return {
          image: recipe.image,
          description: recipe.title,
        };
      });
      setRecipeData(recipesData);
    })
    .catch((error) => {
      console.error('Error while fetching data: ', error);
    });
  }

  useEffect(() => {
    fetchRecipesByQuery('');
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipesByQuery(searchQuery);
  }

  const fetchNewRecipes = () => {
    axios.get('https://api.spoonacular.com/recipes/random', {
      params: {
        apiKey: apiKey,
        number: 21,
      }
    })
    .then((response) => {
      const randomRecipes = response.data.recipes;
      const recipesData = randomRecipes.map((recipe) => {
        return {
          image: recipe.image,
          description: recipe.title,
        };
      });
      setRecipeData(recipesData);
    })
    .catch((error) => {
      console.error('Error while fetching data: ', error);
    });
  }

  return (
    <div>
      <header className="header">
        <h1 className="logo"><a href="#">Tasty Treasures</a></h1>
        <ul className="main-nav">
          <li>
            <Link to ="/food-quotes">
              <a>FOOD QUOTES</a>
            </Link>
          </li>
          <li>
            <Link to="/">
              <button className='reglog'>Sign Out</button>
            </Link>
          </li>
        </ul>
      </header>
      <div className='recipe-header'>
        <h2>Tasty Treasures - Cooking Ideas for You</h2>
        <form action="" role="search" id="form" onSubmit={handleSearch}>
          <input
            type="search"
            name="q"
            id="query"
            placeholder="Search your recipes.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className='search-btn'>Search</button>
        </form>
      </div>

      <div className='main'>
        <div className='recipe-list'>
          {recipeData.map((recipe, index) => (
            <div key={index} className='recipe'>
              <img src={recipe.image} alt={`Recipe ${index}`} />
              <p>{recipe.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='more-recipes'>
        <h2>If you want more random recipes, click on the button:</h2>
        <button className='more-btn' onClick={fetchNewRecipes}>
          New Recipes
        </button>
      </div>
    </div>
  )
};
