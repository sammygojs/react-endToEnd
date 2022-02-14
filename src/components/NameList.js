import React from 'react'
import Person from './Person'


export default function NameList() {
  const names = [
      {
        id:1,
        Name:"Sumit",
        Skill:"Java"
      },
      {
        id:2,
        Name:"Rumit",
        Skill:"Js"
      },
      {
        id:3,
        Name:"Zumit",
        Skill:"C++"
      }
]
  return (
    <div>
        {  names.map((name)=><Person key={name.id} person={name}/> ) }
    </div>
  )
}
