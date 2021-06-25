import React from "react";
import { useHistory, useParams } from "react-router-dom";

function ListTripsPage() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

    return (
      <div>
        <p>Aqui é List Trips Page</p>
        <button onClick={goBack}>Voltar</button>
      </div>
    );
  }
  
export default ListTripsPage;