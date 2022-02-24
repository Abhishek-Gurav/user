import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import styles from  "./homepage.module.css"
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
  return (
  <>
      <Tab.Container className={styles.container} id="left-tabs-example" defaultActiveKey="0">
      <a className="userA btn btn-primary" href="/add">Add User</a>
        <Row className={styles.row}>
          <Col className={styles.verticalTab} sm={3}>
            <Nav variant="pills" className="flex-column">
                {
                  data.map((item,index) => {
                    return (
                      <Nav.Item className={styles.navLink}>
                        <Nav.Link  className={`mb-2 ${styles.navItem}`} eventKey={index}>{item.title}</Nav.Link>
                      </Nav.Item>
                    )
                  })
                }
            </Nav>
          </Col>
          <Col sm={8} className={styles.note_content}>
          {data.map((item,index) => {
                  
          return (<>
                      <Tab.Content className={styles.tab}>
                      <Tab.Pane className={styles.tab_pane} eventKey={index}>
                      
                      <a className={`btn btn-outline-primary ${styles.note_content__button}`} href={`/edit/${item.id}`}>Edit</a>
                      <br />
                        <h2>{item.title}</h2>
                        {item.body}
                        <br/>
                      <Link className={`btn btn-danger ${styles.note_content__button}`} onClick={()=> deleteUser(item.id)}>Delete</Link>
                      </Tab.Pane>
                      </Tab.Content>
                  </>
                    )
                  })}
          </Col>
        </Row>
      </Tab.Container>
      </>
  )
}

export default Homepage