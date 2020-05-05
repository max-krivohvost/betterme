import React from 'react';
import Search from './Search';
import SearchState from './State/Search/searchState';

const App = () => (
  <SearchState>
    <Search />
  </SearchState>
);

export default App;
