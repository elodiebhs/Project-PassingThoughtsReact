import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {

  const [text, setText] = useState('');


  const handleTextChange = (event) => {
    //It will take the event as an argument, and will call setText() to update the state.
    setText(event.target.value)
  }

  const handleSubmit = (event) => {
    //prevent the page from refreshing
    event.preventDefault()

    const thought = {
      id: generateId(),
      text: text,
      expiresAd: getNewExpirationTime()
    }

    if (text.length > 0) {
      //pass object to function addThought
      props.addThought(thought);

      //Clear the input’s text after adding a new thought.
      setText('');
    }
  }
  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
