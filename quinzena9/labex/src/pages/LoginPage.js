
import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goBack = () => {
    history.goBack();
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickSubmitLogin = () => {
    
    const body = {
      email: email,
      password: password
    };

    axios
      .post(
        "api_vai_aqui",
        body
      )
      .then((response) => {
        localStorage.setItem(response.data.token);
        history.push("/admin/trips/create");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
      <div>
        <p>Aqui é Login Page</p>
        <button onClick={goBack}>Voltar</button>
        <div>
          <input type="email" onChange={onChangeEmail} placeholder="Email" value={email} />
          <input type="password" onChange={onChangePassword} placeholder="Senha" value={password} />
          <button onClick={onClickSubmitLogin}>Confirmar</button>
        </div>
      </div>
    );
  }
  
export default LoginPage;