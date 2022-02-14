import React from 'react'

function functionalclick(){
    function clickHandler(){
        alert('functional click')
    }
    
    return(
        <div>
            <button onClick={clickHandler}>Click here</button>
        </div>
    ) 
}

export default functionalclick