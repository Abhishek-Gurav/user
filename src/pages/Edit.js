import axios from 'axios';
import React,{useState,useEffect} from 'react'
import styles from "./Add.module.css"
import {useHistory,useParams} from 'react-router-dom'

function Edit() {
  let history = useHistory();
  const id = useParams();
  const [note, setNote] = useState({
      title:"",
      body:""
  });
  useEffect(()=>{
    loadNote();
  },[])
  const onSubmit= async e =>{
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id.id}`,note);
    history.push("/");
  }
  const loadNote = async () => {
      const result = await axios.get(`http://localhost:3003/users/${id.id}`);
      setNote(result.data);
  }
  return (

    <div className={styles.add}>
    <div className= {`form-group ${styles.form}`} >
      <h2>Edit Note</h2>
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
      <button className="btn btn-lg btn-primary">Edit Note</button>
      </form>
    </div>
     </div>
  )
}

export default Edit