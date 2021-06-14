import React from 'react'

function SearBox({setInputText}) {
    const robotHandler = (e) =>{
        setInputText(e.target.value);
    }
    return (
        <div>
            <input onChange={robotHandler} type="text" placeholder="search robots..."></input>
        </div>
    )
}

export default SearBox
