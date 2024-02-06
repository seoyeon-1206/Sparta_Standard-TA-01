import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputNumber, setInputNumber] = useState("")
  const dispatch = useDispatch();
  const result = useSelector((state) => state.calculator.number);

  const inputChangeHandler = (e) => {
    setInputNumber(e.target.value)
  }

  const addHandler = (number) => {
    dispatch({type: "ADD_NUMBER", payload: Number(inputNumber)});
    setInputNumber("")
  };

  const subtractHandler = (number) => {
    dispatch({type: "SUBTRACT_NUMBER", payload: Number(inputNumber)});
    setInputNumber("")
  };

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input type="number" value={inputNumber} onChange={inputChangeHandler}/> 만큼을 
        <button onClick={addHandler}>더할게요</button> 
        <button onClick={subtractHandler}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
