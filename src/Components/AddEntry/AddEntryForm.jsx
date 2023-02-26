import React, { useState } from 'react';
import './AddEntryForm.css';

const AddEntryForm = (props) => {

    const [name, setName] = useState(0);
    const [post, setPost] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry)
    }
    
    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className = 'form-group'>
                <label>Name</label>
                <input type='number' className="form-control" value = {name} onChange ={(event)=> setName(parseFloat(event.target.value))}/>
            </div>
            <div className ='form-group'>
                <label>Post</label>
                <input type='date' value={post} class="form-control" onChange ={(event)=> setDate(event.target.value)}/>
            </div>
            
            <button type ='submit'  class="btn btn-primary" style={{'margin-top': '1em'}}>Add</button>
        </form>
     );
}
 
export default AddEntryForm;