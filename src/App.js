import "./App.css";
import AllContacts from "./contacts.json";
import { useState } from "react"



function App() {
  // Creating original state of actor array as first 5 objects from AllContacts Array

  const [actor, setActor] = useState(AllContacts);
  console.log(AllContacts);
  console.log(actor);

  // Function to sort actor array by name

  function sortName() {
    const sortedArray = [...actor];
    sortedArray.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (b.name < a.name) {
        return 1;
      }
      return 0;
    });
    setActor(sortedArray);
  }

  // Function to sort actor array by popularity

  function sortPopularity() {
    const sortedArray = [...actor];
    sortedArray.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      } else if (b.popularity < a.popularity) {
        return -1;
      }
      return 0;
    });
    setActor(sortedArray);
  }

  // Function to pick generate a random number from 0-AllContacts array length)
  function pickRandom() {
    let n = Math.floor(Math.random() * AllContacts.length);
    // Then add that random number to the index of AllContacts to select a random actor
    let randomActor = AllContacts[n];
    // Then push that actor into the actor array
    actor.push({ randomActor });
    // The use splice to remove that actor from AllContacts Array
    AllContacts.splice(n, 1);
  }

  // return page with above functions and objects rendeed
  return (
    <div className="App">
      <div className="container">
        <h1>IronContacts</h1>
        <button onClick={pickRandom}>Pick Random</button>
        <button onClick={sortName}>Click me to sort by name</button>
        <button onClick={sortPopularity}>Click me to sort by popularity</button>

        <table>
          <th>
            <tr className="vAlign">
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
            </tr>

            {actor.map((contacts) => {
              return (
                <tr  className="vAlign" key={contacts.id}>
                  <td>
                    <img src={contacts.pictureUrl} />
                  </td>
                  <td>{contacts.name}</td>
                  <td>{contacts.popularity}</td>
                </tr>
              );
            })}
          </th>
        </table>
      </div>
    </div>
  );
}

export default App;
