import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Pagination from '@material-ui/lab/Pagination';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchTableRow from './SearchTableRow';
import SearchContext from '../State/Search/searchContext';


const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function SearchForm() {
  const classes = useStyles();
  const searchContext = useContext(SearchContext);

  const { loading, perPage, repos: { items = [], total_count: totalCount = 0 } } = searchContext;
  const numberPages = Math.ceil(totalCount / perPage);
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {loading
        ? (
          <Grid align="center">
            <CircularProgress />
          </Grid>
        )
        : (items.length > 0
          && (
          <Grid container spacing={4}>
            {items.map((result) => (
              <SearchTableRow repo={result} />
            ))}
            <Pagination count={numberPages} color="secondary" />
          </Grid>
          )
        )}
    </Container>
  );
}
