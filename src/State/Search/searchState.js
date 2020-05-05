import React, { useReducer } from 'react';
import axios from 'axios';
import SearchContext from './searchContext';
import SearchReducer from './searchReducer';
import {
  SEARCH_REPOS,
  CLEAR_SEARCH,
  SET_LOADING,
} from './searchConst';

const SearchState = (props) => {
  const initialState = {
    repos: [],
    page: 1,
    repoName: '',
    perPage: 30,
    loading: false,
  };

  const [state, dispatch] = useReducer(SearchReducer, initialState);

  // Clear Repos
  const clearSearch = () => dispatch({ type: CLEAR_SEARCH });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Get Repos
  const searchRepos = async (repoName, page = 1) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/repositories?q=${encodeURI(repoName)}&sort=stars&order=desc&page=${page}&per_page=${initialState.perPage}`,
    );

    dispatch({
      type: SEARCH_REPOS,
      payload: { data: res.data, repoName, page },
    });
  };
  return (
    <SearchContext.Provider
      value={{
        repos: state.repos,
        loading: state.loading,
        perPage: state.perPage,
        repoName: state.repoName,
        page: state.page,
        searchRepos,
        clearSearch,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchState;
