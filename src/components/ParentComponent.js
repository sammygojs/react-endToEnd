import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:"parent"
      }
      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`hello ${this.state.parentName} and child: ${childName}` )
    }

  render() {
    return (
      <ChildComponent greetHandler={this.greetParent}/>
    )
  }
}

export default ParentComponent