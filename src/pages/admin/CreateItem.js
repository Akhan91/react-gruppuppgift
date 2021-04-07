import React, { useState } from 'react';
import {Link, useHistory} from "react-router-dom";
import CreatePostForm from '../../components/CreatePostForm';

function CreateItem() {
    const [item, setItem] = useState({});
    const history = useHistory();

    const change = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setItem({
            ...item,
            [name] : value
        })
    }

    const submit = async (e) => {
        e.preventDefault();
        try {
            await fetch('http://192.168.1.69:5000/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            });
            history.push('/manage-puns')
        } catch(error) {
            console.log(error);
        }
    }
    return (
        <CreatePostForm 
            submit={submit}
            change={change}
            item={item}
        />
    );
}

export default CreateItem;
