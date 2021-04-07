import React from 'react';

function CreatePostForm({handleSubmit, handleChange, item, PageId}) {
    return (
    <div className="wrapper">
        <h2>Create a new post</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" className="form-title" placeholder="Title" name="title" value={item.title}></input>
            <textarea type="text" className="form-content" placeholder="Content" name="content" value={item.content} onChange={handleChange}></textarea>
            <input type="text" className="form-author" placeholder="Author" name="author" value={item.author}></input>
            <input type="text" className="form-tags" placeholder="Tags (comma-seperated)" name="title" value={item.tags}></input> <br></br>
            <button className="button">Submit.</button>
        </form>
    </div>
    );
}

export default CreatePostForm;
