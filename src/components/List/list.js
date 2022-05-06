import React, { useState, useEffect, createRef } from 'react';

import PlaceDetails from '../PlaceDetails/placeDetails';

import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';

import useStyles from './styles';

const List = ({ places, childClicker, isloading }) => {
  const classes = useStyles();
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState(0);
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places.lenght)
      .fill()
      .map((_, i) => elRefs[i] || createRef());
  }, [places]);
  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants, Hotels & Attraction around you
      </Typography>
      {isloading ? (
        <div className={classes.isloading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attraction">Attraction</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={5}>Above 5.0</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} item key={i} xs={12}>
                <PlaceDetails
                  place={place}
                  selected={Number(childClicker) === i}
                  refProp={elRefs}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};
export default List;
