import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

    increment(){
        //this way, the state does not update
        // this.state.count=this.state.count+1
        // console.log('this.state.count', this.state.count)

        //this way this state updates, error displayed (on click)
        // this.setState({
        //     count:this.state.count+1
        // },()=>{alert(`callback function called ${this.state.count}`)})

        //this way, no error is displayed on console
        this.setState(prev=>({
            count:prev.count+1
        }))
    }

  render() {
    return (
        <>
            <div>Count - {this.state.count}</div>
            <button onClick={()=>this.increment()}>Increment</button>
        </>
    )
  }
}

export default Counter