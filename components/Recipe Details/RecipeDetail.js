import React, {useState, useEffect} from 'react';
import axios from 'axios'


const RecipeDetail = ({ match }) => {
    const { id } = match.params; 
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipes/${id}/`)
            .then(response => {
                console.log('Recipe fetched:', response.data);
                setRecipe(response.data);
            })
            .catch(error => console.error('Error fetching recipe details', error));
    }, [id]);

    if (!recipe) return <div>Loading...</div>;

    return (
        <div>
             <h1>Recipe Details</h1>
            <h2>{recipe.title}</h2>
            <p><strong>Description:</strong> {recipe.description}</p>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <p><strong>Preparation Time:</strong> {recipe.preparation_time}</p>
        </div>
    );
};

export default RecipeDetail;