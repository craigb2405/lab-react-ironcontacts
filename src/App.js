import "./App.css";
import AllContacts from "./contacts.json";
import { useState } from "react"



function App() {
  // Iteration 1 - Creating a state variable to store an array (contacts) containing first 5 items. Also remove those items from AllContacts
  const [contacts, setContacts] = useState(AllContacts.slice(0,5));
  // Iteration 4 - Function to sort actor array by name and popularity
  console.log(AllContacts)
  // Name

  function sortName() {
    const sortedArray = [...contacts];
    sortedArray.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (b.name < a.name) {
        return 1;
      }
      return 0;
    });
    setContacts(sortedArray);
    console.log(AllContacts)
  }

  // Popularity

  function sortPopularity() {
    const sortedArray = [...contacts];
    sortedArray.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      } else if (b.popularity < a.popularity) {
        return -1;
      }
      return 0;
    });
    setContacts(sortedArray);
  }

  // Function to pick generate a random number from 0-AllContacts array length)
  function pickRandom() {
    let n = Math.floor(Math.random() * AllContacts.length);
    // Then add that random number to the index of AllContacts to select a random actor
    let randomActor = AllContacts[n];
    
    // Then push that actor into the actor array
    contacts.push(randomActor);
    
    // The use splice to remove that actor from AllContacts Array
    AllContacts.splice(n, 1);
    console.log(AllContacts)
  }

  // return page with above functions and objects rendeed
  return (
    <div className="App">
      <div className="container">
        <h1>IronContacts</h1>
        <button onClick={pickRandom}>Pick Random</button>
        <button onClick={sortName}>Click me to sort by name</button>
        <button onClick={sortPopularity}>Click me to sort by popularity</button>
<div className="tableContainer">

<h1>Contacts: {contacts.length}</h1>
<h1>AllContacts: {AllContacts.length}</h1>
        <table>

          <tr>
         
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
              <td>Won Oscar</td>
              <td>Won Emmy</td>
              
              </tr>


            {contacts.map((contacts1) => {
              return (
                <tr key={contacts1.id}>
                  <td>
                    <img src={contacts1.pictureUrl} alt={contacts1.name} />
                  </td>
                  <td>{contacts1.name}</td>
                  <td>{contacts1.popularity}</td>
  {/* Iteration 2 conditionally display trophy if the actor has won emmy or oscar using a ternary operator*/}
                  <td>{contacts1.wonOscar ? <p>{String.fromCodePoint('0x1F3C6')}</p> : " " }</td>
                  <td>{contacts1.wonEmmy ? <p>{String.fromCodePoint('0x1F3C6')}</p> : " " }</td>
                </tr>
              );
            })}
          
        </table>
      </div>
    </div>
    </div>
  );
}

export default App;
