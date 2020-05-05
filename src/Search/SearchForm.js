import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  buttons: {
    marginTop: theme.spacing(4),
  },
}));

export default function SearchForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Container maxWidth="sm">
        <Grid align="center">
          <TextField id="standard-basic" label="Repository name" />
        </Grid>
        <div className={classes.buttons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Search
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Cancel
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </form>
  );
}
