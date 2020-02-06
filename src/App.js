import React from 'react';
import './App.css';
import RestaurantFinder from './components/RestaurantFinder';
import { users, venues } from './data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Restaurant Finder App</h1>
      </header>
      <main>
        <RestaurantFinder users={users} venues={venues} />
      </main>
    </div>
  );
}

export default App;
