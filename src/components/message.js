import React, { Component } from 'react'

class message extends Component{
    constructor(){
        super()
        this.state = {
            message:"Welcome visitor"
        }
    }
    
    changeMessage(){
        this.setState({
            message:"Thank you for subscribing"
        })
    }

    render(){
        return(
            <h1>
               {this.state.message}
               <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </h1>
        )
    }
}

export default message;