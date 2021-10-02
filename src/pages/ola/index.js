import { useParams } from "react-router";
// import { useState } from "react";
import { useHistory } from "react-router";
import "./styled.css"

export default function PageOla() {
  const history = useHistory();
  const params = useParams();

  function goToCalculadora() {
    history.push("/calculadora");
  }

  // console.log(params);
  return <div className="Principal">
         Olá Usuário! {params.username}
         <button onClick={goToCalculadora}>Calculadora</button>
        </div>;
}
