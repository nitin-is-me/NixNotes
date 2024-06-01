"use client"
import React, { useState, useEffect } from 'react'
import axios from "axios";
function Create(){
    useEffect(()=>{
        axios.get("http://localhost:5000/get")
        .then(result => setnotes(result.data))
        .catch(err => console.log(err))
        })
    const [notes, setnotes]= useState([]);
    const [note, setnote]=useState();
    const addNote=()=>{
        axios.post("http://localhost:5000/add", {note: note})
        .then(result => console.log(result))
        .catch(err => console.log(err));
        document.getElementById("input").value=""

    }
    const removeNote=(id)=>{
        axios.delete("http://localhost:5000/delete/"+id)
        // .then(result =>{location.reload()})
        .catch(err => console.log(err))
    }
    return(
        <div>
            {/* <input className="form" type="text" placeholder="Enter note" name="" id="" onChange={(e)=>setnote(e.target.value)} /> */}
            <textarea className='form' placeholder='Enter note' onChange={(e)=>setnote(e.target.value)} name="" id="input" cols="30" rows="10"></textarea>
            <br />
            <button onClick={addNote} className="button" type="button">Create</button>
            {
                notes.length===0
                ?
                <div><h2>No notes at the moment</h2></div>
                :
                notes.map(note => (
                    <>
                    <div className='result'>
                        {note.note}
                    </div>
                        <button onClick={()=> removeNote(note._id)} className='delete'>Delete</button>
                        </>
                ))
            }
        </div>
    )
}

export default Create