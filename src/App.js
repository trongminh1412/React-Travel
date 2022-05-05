import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/header';
import List from './components/List/list';
import Map from './components/Map/map';
import { getPlacesData } from './api';

const App = () => {
  const [places, setPlaces] = useState([]);
  const [childClicker, setChildClicker] = useState(null);

  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    // console.log(coordinates, bounds);
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      // console.log('data', data);
      setPlaces(data);
    });
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline>
        <Header />
        <Grid container spacing={3} style={{ width: '100%' }}>
          <Grid item xs={12} md={4}>
            <List places={places} childClicker={childClicker} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={places}
              setChildClicker={setChildClicker}
            />
          </Grid>
        </Grid>
      </CssBaseline>
    </>
  );
};

export default App;
