import React from 'react';
import './App.css';
import RestaurantFinder from './components/RestaurantFinder';
import { users }  from './data/users';
import { venues } from './data/venues';

function App() {
  const Venues = venues.map(venue => {
    return {
        name: venue.name,
        food: venue.food.map(food => food.toLowerCase()),
        drinks: venue.drinks.map(drink => drink.toLowerCase()),
    }
  });
  const Users = users.map(user => {
    return {
        name: user.name,
        wont_eat: user.wont_eat.map(food => food.toLowerCase()),
        drinks: user.drinks.map(drink => drink.toLowerCase())
    }
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1>Restaurant Finder App</h1>
      </header>
      <main>
        <RestaurantFinder users={Users} venues={Venues} />
      </main>
    </div>
  );
}

export default App;
