import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>{/*{code here}*/}
  <h1>Directors Page</h1>
  <div>
  {directors.map((director) => (
    <div key={director.name}>
    <h2>{director.name}</h2>
    <ul>
    {director.movies.map((directorMovie) => (
      <li key={directorMovie}>{directorMovie}</li>
    ))}
    </ul>
    </div>
  ))}
  </div>
  </div>;
}

export default Directors;
