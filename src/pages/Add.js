import axios from 'axios';
import React,{useState} from 'react'
import styles from "./Add.module.css"
import {useHistory} from 'react-router-dom'

function Add() {
  let history = useHistory();
  const [note, setNote] = useState({
      title:"",
      body:""
  });
  const onSubmit= async e =>{
    e.preventDefault();
    await axios.post ("http://localhost:3003/users",note);
    history.push("/");
  }
  return (

    <div className={styles.add}>
    <div className= {`form-group ${styles.form}`} >
      <h2>Add Note</h2>
      <form onSubmit={e => onSubmit(e)}>
      <input 
        type='text'
        className='form-control form-control-lg'
        placeholder='Title'
        name='title' 
        value={note.title}
        onChange={(e) => setNote({...note,title:e.target.value})}
      />
      <textarea 
        type='text'
        className='form-control form-control-lg'
        placeholder='content'
        name='content'
        rows={8}
        value={note.body}
        onChange={(e) => setNote({...note,body:e.target.value})}
      />
      <button className="btn btn-lg btn-primary">Add Note</button>
      </form>
    </div>
     </div>
  )
}

export default Add