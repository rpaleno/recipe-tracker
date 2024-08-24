import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './RecipeList.css';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/recipes/')
        .then(response => setRecipes(response.data))
        .catch(error => console.error('Error fetching recipes', error));
    }, []);

    return (
        <div>
            <h1> Recipe List</h1>
            <ul className="recipe-list">
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <a href={`/recipe/${recipe.id}`}>{recipe.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;

