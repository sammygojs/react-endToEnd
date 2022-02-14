import React, { Component } from 'react'

export class eventBind extends Component {
    //use rconst
    constructor(props){
        super()

        this.state = {
            message:"hello"
        }

        this.clickHandler=this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message:"Goodbye"
        })
    }

  render() {
    return (
        <div>
            <div>{this.state.message}</div>
            {/* <button onClick={this.clickHandler}>Click</button> */}
            {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
            <button onClick={this.clickHandler}>Click</button>
        </div>
    )
  }
}

export default eventBind