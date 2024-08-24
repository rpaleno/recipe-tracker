import React, { useState } from 'react';
import './RecipeForm.css';

const RecipeForm = ({ onClose }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [preparationTime, setPreparationTime] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const recipe = { title, description, ingredients, instructions, preparation_time: preparationTime };

        try {
            const response = await fetch('http://localhost:8000/api/recipes/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(recipe),
            });

            if (response.ok) {
                alert('Recipe added successfully!');

                setTitle('');
                setDescription('');
                setIngredients('');
                setInstructions('');
                setPreparationTime('');

 
                window.location.reload();
            } else {
                alert('Failed to add recipe. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while adding the recipe. Please try again.');
        }
    };

    return (
        <div className="recipe-form-container">
            <h2>Add a Recipe</h2>
            <form className="recipe-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        placeholder="Enter recipe title"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        placeholder="Enter recipe description"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ingredients">Ingredients:</label>
                    <textarea
                        id="ingredients"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        required
                        placeholder="List ingredients"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="instructions">Instructions:</label>
                    <textarea
                        id="instructions"
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        required
                        placeholder="Enter cooking instructions"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="preparationTime">Preparation Time:</label>
                    <input
                        id="preparationTime"
                        type="text"
                        value={preparationTime}
                        onChange={(e) => setPreparationTime(e.target.value)}
                        required
                        placeholder="Enter preparation time"
                    />
                </div>
                <div className="form-actions">
                    <button type="submit">Submit Recipe</button>
                    <button type="button" onClick={onClose} className="close-button">Close</button>
                </div>
            </form>
        </div>
    );
};

export default RecipeForm;
