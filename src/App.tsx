import "./css/global.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Children from "./components/Children";
import ParentToChild from "./components/ParentToChild";
import Optional from "./components/Optional";


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
            <Status status="loading"/>
            <Children>
                String as children in the component
            </Children>

            <ParentToChild>
             Children component inside parent component
                <Children>
                   From parent to children using children component also
                </Children>
            </ParentToChild>
            <Optional name={'Jhon'} location={'Nepal'}/>
        </div>
    );
}

export default App;

