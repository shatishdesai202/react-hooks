import React from 'react'

function Count({text, value}) {
    console.log(`${text}`);

    return (
        <div>
            <h3> {text} - {value} </h3>
        </div>
    )
}

export default React.memo(Count)
