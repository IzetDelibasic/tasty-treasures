import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../components/Recipe.css';


export const Recipe = () => {
  const [recipeData, setRecipeData] = useState([]);
  const apiKey = 'd99f90a08fc4468b93c73ff138256ade';

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

  useEffect(() => {
    fetchNewRecipes();
  }, []);

  return (
    <div>
      <h2>Tasty Treasures - Cooking Ideas for You</h2>
      <form action="" role="search" id="form">
        <input type="search" name="q" id="query" placeholder="Search.."/>
      </form>
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
        <h2>If you want more recipes, click on button:</h2>
        <button className='more-btn' onClick={fetchNewRecipes}>
          New Recipes
        </button>
      </div>
    </div>
  )
};
