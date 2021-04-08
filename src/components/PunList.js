import React from 'react'
import Pun from './Pun'


function PunList({ puns, deletePun }) {
    return (

        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Date</th>
                        <th>Tags</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>

            <tbody>
            {
                puns.map( pun => (
                    <Pun key={pun['_id']} pun={pun} deletePun={deletePun}/>
                 ))
            }
            </tbody>
            </table>
        </div>

    )
      
}

export default PunList
