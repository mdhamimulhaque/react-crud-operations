import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { userContext } from '../UserContext/UserContext';
import {Container,Row,Col,Modal,Button,Badge  } from 'react-bootstrap';
import "./Delete.css"

const Delete = () => {
    const [users,setUsers] = useContext(userContext);
    const {id} = useParams();

    const deleteUser = (x) =>{
      const user = users.filter((user)=> user.id != x);
      setUsers(user)  
    }

    
    // setUsers(user)

    return (
        <div>
         <Container>
          <Row>
            <Col>
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>
                <h2 className="title text-danger " >Notification</h2>
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <h4>Are You Sure...???</h4>
              </Modal.Body>

              <Modal.Footer>
                 <Link to="/">
                   <Button  className="goTo-home" variant="info">Go TO Home</Button>
                 </Link>
                 <Link to="/">
                   <Button onClick={()=>deleteUser(id)} className="goTo-home" variant="danger">Delete</Button>
                 </Link>
                
              </Modal.Footer>
            </Modal.Dialog>
            </Col>
          </Row>
        </Container>
        </div>
    );
};

export default Delete;