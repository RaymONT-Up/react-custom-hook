import "./App.css";
import useCounter from "./hooks/useCounter";

function App() {
  const counter1 = useCounter(true);
  const counter2 = useCounter(false);

  return (
    <div className="App">
      <h1>Счетчики с помошью кастомного хука</h1>
      <h3> {counter1}</h3>
      <h3> {counter2}</h3>
    </div>
  );
}

export default App;
