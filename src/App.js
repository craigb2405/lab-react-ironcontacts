import "./App.css";
import AllContacts from "./contacts.json";
import { useState } from "react"

function App() {
  const [actor, setActor] = useState(AllContacts.slice(0,5))

  function sortName(){
    const sortedArray = [...actor] // need to have it sort everything
    sortedArray.sort((a,b)=>{
        if(a.name<b.name){
            return -1
        }
        else if(b.name<a.name){
            return 1
        }
        return 0
    })
    setActor(sortedArray)
  }

  function sortPopularity(){
    const sortedArray = [...actor] // need to have it sort everything
    sortedArray.sort((a,b)=>{
        if(a.popularity<b.popularity){
            return 1
        }
        else if(b.popularity<a.popularity){
            return -1
        }
        return 0
    })
    setActor(sortedArray)
  }

  
  function pickRandom() {
    let n = Math.floor(Math.random()* AllContacts.length);
    let randomActorId = AllContacts[n].id
    if (actor.includes(randomActorId)){console.log("already here")}
  }

  return (

    <div className="App">
         <div className="container">
      <h1>IronContacts</h1>
      <button onClick={pickRandom}>Click me</button>
      <button onClick={sortName}>Click me to sort by name</button>
      <button onClick={sortPopularity}>Click me to sort by popularity</button>
 
      

         <table>
          <th>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
            </tr>

            {actor.map((contacts) => {
              return (
                <tr key={contacts.id}>
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
