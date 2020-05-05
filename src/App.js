import React from 'react';
import { withStyles } from '@material-ui/core';
import Search from './Search';

const AppStyles = (theme) => ({
  rootContainer: {
      paddingTop: theme.spacing(6),
      paddingLeft: 50,
      paddingRight: 50,
      paddingBottom: 100,
  },
  list: {
      width: 500,
  },
  title: {
      marginBottom: theme.spacing(3),
  },
});

const App = class extends React.Component {
  state = { drawerOpen: false };

  render() {
      const { classes } = this.props;
      return <Search />;
  }
};

export default withStyles(AppStyles)(App);
