import React from 'react'

function MemoComponent({name}) {
    console.log("Rendering Memo component")
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComponent)

//Memo component used in functional component to stop unnecessary rendering and
// boost the performace
//it is same as pure component in case of class based component.
