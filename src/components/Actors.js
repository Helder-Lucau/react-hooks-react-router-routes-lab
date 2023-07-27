import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      <div>
        {actors.map((actor) => (
          <div key={actor.name}>
            <h2>{actor.name}</h2>
            <ul>
            {actor.movies.map((actorMovies) => (
              <li key={actorMovies}>{actorMovies}</li>
            ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Actors;
