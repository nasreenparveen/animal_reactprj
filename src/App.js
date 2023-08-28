import './App.css';
import { useState } from "react";
import AnimalShow from "./animalShow";

function getRandomAnimal()
{
   const animals=['cow','bird','cat','gator','horse'];
   return animals[Math.floor(Math.random()*animals.length)];

}

function App () {

const[animals,setAnimals]=useState([]);

   const handleOnClick=()=>{
      setAnimals([...animals,getRandomAnimal()]);
   };

   const renderedAnimal=animals.map((animal,index)=>{
      return <AnimalShow type={animal} key={index}/>
   }
   );
 

   return(
    <div className="app">
      <button onClick={handleOnClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimal}</div>
    </div>
   );
}
 
export default App;