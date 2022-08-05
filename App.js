import {useState} from "react";
import {data} from "./Birthdaydata";
function App(){
const [people,setPeople]=useState(data)
const removePerson=(id)=>{
  let newPerson=people.filter((person) =>person.id!==id)
  setPeople(newPerson)
}

return(
  <>
  <h3 style={{backgroundColor:"red",color:"yellow",textAlign:"center",fontSize:"40px"}}>
    you have {people.length} birthdays today
  </h3>
  {people.map((person)=> {
    const{id,name,image,age,country}=person
    return(
      <>
      <div className="container" key={id}>
        <img src={image} alt={name} />
        <ul type="square">
        <li>{name}</li>
        <li>{age}</li>
        <li>{country}</li>
        </ul>
      </div>
      <button className="btn" onClick={()=>removePerson(id)}>DISMISS</button>
      </>
    )
  })}
  </>
)
}
export default App;
