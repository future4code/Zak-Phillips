import React from "react";
import { useHistory, useParams } from "react-router-dom";

function LoginPage() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

    return (
      <div>
        <p>Aqui é Login Page</p>
        <button onClick={goBack}>Voltar</button>
      </div>
    );
  }
  
export default LoginPage;