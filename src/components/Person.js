import React from 'react'

export default function Person({person}) {
  return (
    <div>id:{person.id}, My name is {person.Name} and skill in {person.Skill}</div>
  )
}
