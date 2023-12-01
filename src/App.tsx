import "./css/global.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";


function App() {
    const personName = {
        firstName: "Jhone",
        lastName: "Doe",
    };

    const personList = [
        {
            id: 0,
            firstName: "Test",
            lastName: "one"
        },
         {
            id: 1,
            firstName: "Test",
            lastName: "two"
        },
         {
            id: 2,
            firstName: "Test",
            lastName: "three"
        },
         {
            id: 3,
            firstName: "Test",
            lastName: "four"
        }
    ]
    return (
        <div className="container mx-auto p-4 space-y-3">
            <Greet name="sailesh" isLoggedIn={true} messageCount={2}/>
            <Person name={personName}/>
            <PersonList nameLists={personList}/>
        </div>
    );
}

export default App;

