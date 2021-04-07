import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";

function Items() {
    const [posts, setPosts] = useState([]);

    useEffect (() => {
        fetchPosts();
    }, []) // Second arg as empty array, means run once only on load. = ComponentDidMount

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:5000/posts');
            
            if (!response.ok) {
                throw new Error ('HTTP Error! status: ' + response.status);
            }
            const data = await response.json();
            setPosts(data);
            console.log(data);

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div>
            <h1>Items</h1>

            {
                posts.map( post => (
                    <article key = {post['_id']}>
                        {/* <hr/> */}
                        <p><strong>Title: </strong>{post.title}</p>
                        <p><strong>Content: <br></br></strong>{post.content}...<a href="#">See more</a></p>
                        <p><strong>Author: </strong> {post.author}</p>
                        <p><strong>Date: </strong> {post.date}</p>
                        <p><strong>Tags: </strong> {post.tags}</p>
                        <br></br>
                        <hr/>
                    </article>
                ))
            }
        </div>
    )
}

export default Items
