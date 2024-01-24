import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [airline, setAirline] = useState("");
  const dispatch = useDispatch();
  const airlineList = useSelector((state) => state.airlineList);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "SET_AIRLINE", payload: airline });
    setAirline("");
  };

  useEffect(() => {
    handleSubmit;
  }, []);
  useSelector((store) => {
    store.airlineList;
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Redux Airport</h1>
        <input
          value={airline}
          onChange={(event) => setAirline(event.target.value)}
          placeholder="Airline Name"
        />
        <button type="submit">Add Airline</button>
      </form>
      <ul>
        {airlineList.map((airline) => (
          <li key={airline}>{airline}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
