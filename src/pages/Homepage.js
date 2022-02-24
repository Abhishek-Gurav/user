import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Tab,Tabs, TabList, TabPanel } from 'react-tabs';
import "./homepage.css"
import { Link } from 'react-router-dom';
function Homepage() {
    const [data, setData] = useState([]);

  useEffect(() => {
    loadUser();
  },[]);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setData(result.data.reverse());
  }
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUser();
  }
  console.log(data);  
  return (
    <div className="container">
    <div className='header'>
    <h1>Notes</h1>
    <Link className='btn btn-light' to="/add">Add Note</Link>
    </div>
    <div className="App">
      <Tabs>
        <TabList>
        {
          data.map((item,index)=>{
            return(
            <Tab key={index}>
            <p>{item.title}</p>
          </Tab>
            )
          })
        }
        </TabList>

        {
          data.map((item,index)=>{
            return(
            <TabPanel key={index}>
            <div className='panel-content'>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <Link className='btn btn-outline-light' to={`edit/${item.id}`}>Edit</Link>
            <button className='btn btn-danger' onClick={() => deleteUser(item.id)}>Delete</button>
            </div>
            </TabPanel>
            )
          })
        }
      </Tabs>
    </div>
    </div>
  )
}

export default Homepage

{/* <Tab.Content className={styles.tab}>
                      <Tab.Pane className={styles.tab_pane} eventKey={index}>
                      
                      <a className={`btn btn-outline-primary ${styles.note_content__button}`} href={`/edit/${item.id}`}>Edit</a>
                      <br />
                        <h2>{item.title}</h2>
                        {item.body}
                        <br/>
                      <Link className={`btn btn-danger ${styles.note_content__button}`} onClick={()=> deleteUser(item.id)}>Delete</Link>
                      </Tab.Pane>
                      </Tab.Content> */}