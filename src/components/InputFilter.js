import React from 'react';

const inputFilter = ({ change }) => (
  <React.StrictMode>
    <input id="searchBar" type="text" value="" onChange={change} placeholder="Search for a movie" />
  </React.StrictMode>
);

export default inputFilter;
