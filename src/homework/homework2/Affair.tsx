import React from 'react'
//начиная с 17 версии реакта, его можно не импортировать в проект

type AffairPropsType = {
    // key не нужно типизировать
    affair: any // need to fix any
    deleteAffairCallback: any // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {}// need to fix

    return (
        <div>
            // show some text
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
