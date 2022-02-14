import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }


  render() {
    //   if(this.state.isLoggedIn){
    //       return (
    //           <div>
    //               Welcome Sumit
    //           </div>
    //       )
    //   }
    //   else{
    //       return(
    //           <div>
    //               Welcome guest
    //           </div>
    //       )
    //   }
    let message = ''
    if(this.state.isLoggedIn){
        message = <div>Hi Sumit</div>
    }
    else{
        message = <div>Hi Guest</div>
    }
    return(
        <div>{message}</div>
    )
  }
}

export default UserGreeting