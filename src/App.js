import "./App.css";
import AllContacts from "./contacts.json";
import { useState } from "react";

function App() {
  // Iteration 1 - Creating a state variable to store an array (contacts) containing first 5 items. Originally had step to remove these from AllContacts but it was doing it twice for some reason. Removed this in favour of a function to check if the Id exists in the Contacts Array and if it does, dont add it.
  const [contacts, setContacts] = useState(AllContacts.slice(0, 5));


  // Iteration 2: Conditional add trophy emoji based on if they have won and oscar or emmy in the table section below.

  // Iteration 3: Function to pick a random actor from the list of contacts and add it to the contacts array ✅
  function pickRandom() {
    let randomNumber = Math.floor(Math.random() * AllContacts.length);
    // Then add that random number to the index of AllContacts to select a random actor
    let randomActor = AllContacts[randomNumber];

    // Used the follow solution as AllContacts array could still produce an actor already in the contacts array. This solution uses Sets which I found on https://joshcollinsworth.com/blog/confirm-all-ids-are-unique-in-an-array-of-javascript-objects-using-map-and-sets.

    // Map over contacts to create an array containing only ids
    let ids = contacts.map((contacts) => contacts.id);
    // If randomActor.id is found within ids (so exists in contacts array) then run the function again.
    if (ids.includes(randomActor.id)) {
      pickRandom();
      // else add to contacts
    } else setContacts([...contacts, randomActor]);
  }

  // Iteration 4 - Function to sort actor array by name and popularity

  // Sort by name
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
  }

  // Sort by Popularity
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

  // Iteration 5: Remove Contact function and using it in onClick inside of the button ✅
  function deleteActor(actorId) {
    const filteredActors = contacts.filter((actor) => {
      return actor.id !== actorId;
    });
    setContacts(filteredActors);
  }

  // return page with above functions and objects rendeed
  return (
    <div className="App">
      <div className="container">
        <h1>IronContacts</h1>
        <div className="buttons">
          <button onClick={sortName}>Sort by name</button>
          <button onClick={pickRandom}>Pick Random</button>
          <button onClick={sortPopularity}>Sort by popularity</button>
         </div>
        <div className="tableContainer">
        <h2>Array Length Counts</h2>
        <div className="counts">
          <h3>Contacts: {contacts.length}</h3>
          <h3>AllContacts: {AllContacts.length}</h3>
          </div>
          <hr></hr>
          <table>
            <tr>
              <td className="tHeader">Picture</td>
              <td className="tHeader">Name</td>
              <td className="tHeader">Popularity</td>
              <td className="tHeader">Won Oscar</td>
              <td className="tHeader">Won Emmy</td>
            </tr>

            {contacts.map((contacts1) => {
              return (
                <tr key={contacts1.id}>
                  <td>
                    <img src={contacts1.pictureUrl} alt={contacts1.name} />
                    <br />
                      <button
                        onClick={() => {
                          deleteActor(contacts1.id);
                        }}
                      >
                        Delete me
                      </button>
                    
                  </td>
                  <td>{contacts1.name}</td>
                  <td>{contacts1.popularity.toFixed(2)}</td>
                  {/* Iteration 2: conditionally display trophy if the actor has won emmy or oscar using a ternary operator ✅*/}
                  <td>
                    {contacts1.wonOscar ? (
                      <p>{String.fromCodePoint("0x1F3C6")}</p>
                    ) : (
                      " "
                    )}
                  </td>
                  <td>
                    {contacts1.wonEmmy ? (
                      <p>{String.fromCodePoint("0x1F3C6")}</p>
                    ) : (
                      " "
                    )}
                  </td>
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
