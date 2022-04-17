import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/header';
import List from './components/List/list';
import Map from './components/Map/map';
import PlaceDetails from './components/PlaceDetails/placeDetails';

const App = () => {
  return (
    <>
      <CssBaseline>
        <Grid container spacing={3} style={{ width: '100%' }}>
          <Grid item xs={12} md={4}>
            <List />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map />
          </Grid>
        </Grid>
      </CssBaseline>
    </>
  );
};

export default App;
