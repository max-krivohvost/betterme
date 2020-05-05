import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Pagination from '@material-ui/lab/Pagination';
import SearchTableRow from './SearchTableRow';


const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const results = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function SearchForm() {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {results.map((result) => (
          <SearchTableRow card={result} />
        ))}
      </Grid>
      <Pagination count={10} color="secondary" />
    </Container>
  );
}
