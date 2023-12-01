import "./css/global.css";
import Greet from "./components/Greet";
import Person from "./components/Person";


function App() {
  const person = {
    firstName: "Jhone",
    lastName: "Doe",
  };
  return (
    <div className="container mx-auto p-4">
      <Greet name="sailesh" isLoggedIn={true} messageCount={2} />
      <Person name={person} />
    </div>
  );
}

export default App;

