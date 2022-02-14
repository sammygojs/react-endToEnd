import React, { Component } from 'react'

function ChildComponent(props){
    return(
        <div>
            <button onClick={()=>props.greetHandler('child')}Hello Parent>Greet Parent</button>
        </div>
    )
}

export default ChildComponent