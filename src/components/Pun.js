import React from 'react'

function Pun({ pun, deletePun }) {

    let punDate = new Date(pun.date);
    
    const handleDeleteBtn = () => {
        deletePun(pun['_id'])
    }

    return (
       

        <tr className="punrow" key={pun['_id']}>

            <td>{pun.title}</td>
            <td>{pun.author}</td>
            <td>{`${punDate.getFullYear()}-${punDate.getMonth()}-${punDate.getDate()}`}</td>
            <td>{pun.tags}</td>
            <td><button>Update</button></td>
            <td><button onClick={handleDeleteBtn}>Delete</button></td> 

        </tr>

       
    )
}

export default Pun
