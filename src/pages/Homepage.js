import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

function Homepage() {
    const [data, setData] = useState([]);

  useEffect(() => {
    loadUser();
  },[]);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setData(result.data);
  }
  return (
  <>
    <a className="userA btn btn-primary" href="/add">Add User</a>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                {
                  data.map((item,index) => {
                    return (
                      <Nav.Link className="mb-2" eventKey={index}>{item.title}</Nav.Link>
                    )
                  })
                }
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} className="note_content">
          <a className="btn btn-outline-primary note_content__button" href="/edit">Edit</a>
            <Tab.Content>
            {
                  data.map((item,index) => {
                    return (
                      <Tab.Pane eventKey={index}>
                        {item.body}
                      </Tab.Pane>
                    )
                  })
                }
            </Tab.Content>
            <a className="note_content__button btn btn-danger" href="/delete">Delete</a>
          </Col>
        </Row>
      </Tab.Container>
      </>
  )
}

export default Homepage