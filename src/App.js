import React from 'react';
import './App.css';
import RestaurantFinder from './components/RestaurantFinder';
import { users }  from './data/users';
import { venues } from './data/venues';
import { getMappedUsers, getMappedVenues } from "./lib/getPreferedVenues";

function App() {
  const Venues = getMappedVenues(venues);
  const Users = getMappedUsers(users);
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
