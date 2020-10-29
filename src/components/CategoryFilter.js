import React from 'react';

const categoryFilter = ({change}) => {
  const CATEGORIES = ['all', 'movie', 'series', 'game'];

  return(
    <select onChange={event =>{change(event.target.value);}}>
        {CATEGORIES.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
    </select>
  );
}

export default categoryFilter;