import React from 'react';

function CreatePostForm() {
    return (
    <div className="wrapper">
        <h2>Create a new post</h2>
        <form>
            <input type="text" className="form-title" placeholder="Title"></input>
            <textarea type="text" className="form-content" placeholder="Content"></textarea>
            <input type="text" className="form-author" placeholder="Author"></input>
            <input type="text" className="form-tags" placeholder="Tags (comma-seperated)"></input> <br></br>
            <button className="button">Submit.</button>
        </form>
    </div>
    );
}

export default CreatePostForm;
