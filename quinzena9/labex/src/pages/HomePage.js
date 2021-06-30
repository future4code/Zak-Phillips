import React from "react";
import { useHistory, useParams } from "react-router-dom";

function HomePage() {
  const history = useHistory();

  const goListTripsPage = () => {
    history.push("/trips/list");
  };

  const goLoginPage = () => {
    history.push("/login");
  };

    return (
      <div>
        <p>Aqui é Home Page</p>
        <button onClick={goListTripsPage}>Lista de viagens</button>
        <button onClick={goLoginPage}>Login</button>
      </div>
    );
  }
  
export default HomePage;