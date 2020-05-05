import {
  SEARCH_REPOS,
  CLEAR_SEARCH,
  SET_LOADING,
} from './searchConst';


export default (state, action) => {
  switch (action.type) {
    case SEARCH_REPOS:
      const { data = [], repoName, page} = action.payload;
      return {
        ...state,
        repos: data,
        repoName,
        page,
        loading: false,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        repos: [],
        repoName: '',
        page: 1,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
