import React, { Component } from 'react'

export class classclick extends Component {
    clickHandler(){
        alert('clicked the class button')
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click here</button>
      </div>
    )
  }
}

export default classclick