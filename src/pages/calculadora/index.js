import { useState } from "react";
import { useParams } from "react-router";
import "./styled.css"

export default function PageCalculadora() {
  const params = useParams();
  const [firstInputValue, setFirstInputValue] = useState(0);
  const [seccondInputValue, setSeccondInputValue] = useState(0);
  const [resultado, setResultado] = useState("");

  function onChangeFirst(e){
    const re = /^[0-9\b]+$/;
      if (e.target.value === '' || re.test(e.target.value)) {
        setFirstInputValue(e.target.value)
      }
  }

  function onChangeSeccond(e){
    const re = /^[0-9\b]+$/;
      if (e.target.value === '' || re.test(e.target.value)) {
        setSeccondInputValue(e.target.value)
      }
  }

  function Soma() {
    const value = firstInputValue + seccondInputValue;
    const valueText = (`Resultado: ${firstInputValue} + ${seccondInputValue} = ${value}`);
    setResultado(valueText);
  }

  console.log(params);
  return <div className="Conteiner">
    <h1>Calculadora</h1>
    <div className="Dados">
        <div className="Form">
          <input
            className="Input"
            placeholder="valor 1"
            id="firstValue"
            value={firstInputValue}
            onChange={onChangeFirst}
            type="text"
          />
          <input
            className="Input"
            id="seccondValue"          
            type="text" pattern="[0-9]*"
            placeholder="valor 2"
            value={seccondInputValue}
            onChange={onChangeSeccond}
          />

          <button onClick={Soma}>Soma</button>
        </div>
        
        <div>
          {resultado !== "" ? 
          (
            <div>             
              <h2 className="Resultado">{resultado}</h2>
            </div>
          )
          :
          (
          <></>
          )}
        </div>
        
      </div>
    </div>;
}
