import React from 'react';

function CreatePostForm({submit, change, item}) {
    return (
    <div className="form-wrapper">
        <h1>create a new post.</h1>
        <form onSubmit={submit}>
            <input type="text" className="form-title" placeholder="title" name="title" value={item.title} onChange={change}></input>
            <textarea type="text" className="form-content" placeholder="content" name="content" value={item.content} onChange={change}></textarea>
            <input type="text" className="form-author" placeholder="author" name="author" value={item.author} onChange={change}></input>
            <input type="text" className="form-tags" placeholder="tags (comma-seperated)" name="tags" value={item.tags} onChange={change}></input> <br></br>
            <button className="button">submit</button>
        </form>
    </div>
    );
}

export default CreatePostForm;
