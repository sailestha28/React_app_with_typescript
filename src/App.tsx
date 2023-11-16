import "./css/global.css";
import Greet from "./components/Greet";
import Person from "./components/Person";

function App() {
  const person = {
    firstName: "Jhone",
    lastName: "Doe",
  };
  return (
    <div>
      <Greet name="sailesh" />
      <Person name={person} />
    </div>
  );
}

export default App;

