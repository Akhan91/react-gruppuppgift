import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import PunList from '../../components/PunList';


function ManageItems() {
    const [puns, setPuns] = useState([]);


    useEffect (() => {
        fetchPuns();
    },    []) // Gör detta anrop bara en gång när sidan laddas upp, såsom componentDidMount


    const fetchPuns = async () => {
     try {
         const response = await fetch('http://localhost:5000/posts')
         if(!response.ok) {
             throw new Error('HTTP Error! status: ' + response.status);
         }
         const data = await response.json();
         setPuns(data);
         console.log(data)
        }
        catch(error) {
            console.log(error);
        }
    }

    const deletePun = async(punId) => {
        try {
            await fetch('http://localhost:5000/posts/' + punId, {
                method: 'DELETE', // GET POST PATCH DELETE
            });

        }catch(message) {
            throw new Error (message)
        }


        fetchPuns();
    }

    return (

        
        <div className="managediv">
            <h1>Manage Posts</h1>
        
            <PunList 
            puns = {puns} 
            deletePun={deletePun}
            
            />
        </div>
    )
}

export default ManageItems
