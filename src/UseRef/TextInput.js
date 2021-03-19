import React, { useEffect, useRef } from 'react'

function TextInput() {
    
    const inputBox = useRef(null)

    useEffect(() => {
        inputBox.current.focus();
        console.log(inputBox.current);
    }, [])

    return (
        <div>
            <input ref={inputBox}  type="text" />   
        </div>
    )
}

export default TextInput
