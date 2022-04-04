import React from 'react';

function Button({text, handleFunction}) {
    console.log(`${text}`);
    return (
        <div>
            <button onClick={handleFunction} >
                Increase {text}  
            </button>
        </div>
    )
}

export default React.memo(Button)
