import {React , useEffect} from "react";
import { useHistory} from "react-router-dom";

const useProtectedPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      console.log("Não está logado!!!");
      history.push("/login");
    }
  }, []);
};

function TripDetailsPage() {
  useProtectedPage();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        "api_vai_aqui",
        {
          headers: {
            auth: token
          }
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);


  return (
      <div>
        <p>Aqui é Trip Details Page</p>
      </div>
    );
  }
  
export default TripDetailsPage;