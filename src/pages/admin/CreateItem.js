import React, { useState } from 'react';
import CreatePostForm from '../../components/CreatePostForm';

function CreateItem() {
    const [item, setItem] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setItem({
            ...item,
            [name] : value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch('http://localhost:5000/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            });
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <CreatePostForm 
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            item={item}
            pageid="create-item"
        />
    );
}

export default CreateItem;
