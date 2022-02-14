import React, { Component } from 'react'

class welcome extends Component{
    render(){
        const {name,nickName} = this.props
        return <h1>Class component name:{name}, nickName:{nickName}</h1>
    }
}

export default welcome;
