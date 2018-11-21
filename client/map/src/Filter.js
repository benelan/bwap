import React from 'react';

// the UI component for filtering the subway entrances by subway line
export default (props) => {
  const { genres, filterGenres } = props;

  // this is the JSX that will become the Filter UI in the DOM, notice it looks pretty similar to HTML
  // notice in the select element onChange is set to the updateFilter method
  // thus when a user selects a new subway line to view, the component passes the new filter value
  // to the parent component, Map, which reloads the GeoJSON data with the current filter value
  return (
    <div className="filterSubwayLines">
      <hr/>
      <h3>Find a Bwapper</h3>
      <p>Use the filters to find a bwapper with a book you want</p>
      <p>Filter by Genre</p>
      <select defaultValue="*"
        type="select"
        name="filtergenres"
        onChange={(e) => filterGenres(e)}>
          { /* We render the select's option elements by maping each of the values of subwayLines array to option elements */ }
          {
            genres.map((genre, i) => {
              return (
                  <option value={genre} key={i}>{genre}</option>
                );
            }, this)
          }
      </select>
    </div>
  );
};
