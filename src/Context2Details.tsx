import React, { useContext } from "react"
import { Context2 } from "./context/Context2"

export default function Context2Details() {

  const context2 = useContext(Context2)
  console.log(context2.misdemeanours);
  return (
    <>  
              <tr> 
              <thead> CitizenId</thead>
              <thead> Date </thead>
              <thead> Misdemeanour </thead>
              <thead> Punishment Idea </thead>
              </tr>
              
     
          {context2 && context2.misdemeanours && 
            context2.misdemeanours.map((misdemean) => 
               <tr>
                <td> {misdemean["citizenId"]}</td>
              <td>{misdemean["date"]}</td>
              <td>{misdemean["misdemeanour"]}</td>
              </tr>
          )}
             
    </>
  )
}