

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';
import { generateId, getNewExpirationTime } from './utilities';

function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  //Inside of addThought(), we’ll call setThoughts() with a function that returns a new state: the array with the new thought at the front.
  const addThought = (thought) => {
    setThoughts(prev => [thought, ...prev])
  }

  // goo through the thoughts array, fitlter the thoughtId to Remove and remove it. It will return an array only with the thoughts we want to keep
  const removeThought = (thoughtIdToRemove) => {
    setThoughts(prev => thoughts.filter(thoughts => (thoughts.id !== thoughtIdToRemove)))
    
  }

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} removeThought={removeThought}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));


export default App;
