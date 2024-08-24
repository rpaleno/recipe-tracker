import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import RecipeList from './components/Recipe List/RecipeList';
import RecipeDetail from './components/Recipe Details/RecipeDetail';
import RecipeForm from './components/Recipe Form/RecipeForm';
import './App.css';

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <Router>
      <div className="app-container">
        <nav className="nav-bar">
          <Link to="/" className="nav-link">Home</Link>
          <button className="toggle-button" onClick={toggleForm}>
            {showForm ? 'Hide Form' : 'Add a Recipe'}
          </button>
        </nav>

        {showForm && <RecipeForm onClose={() => setShowForm(false)} />}

        <main>
          <Switch>
            <Route exact path="/" component={RecipeList} />
            <Route path="/recipe/:id" component={RecipeDetail} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
