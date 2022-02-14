import React from 'react'

const Greet = (props) =>{
    const {name,nickName} = props
    return <h1>this is functional component of {name} and nickName {nickName}</h1>
}

export default Greet;