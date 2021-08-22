import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { userContext } from '../UserContext/UserContext';
import {Container,Row,Col,Button,Badge  } from 'react-bootstrap';
import "./Read.css"


const Read = () => {
    const[users,setUsers] = useContext(userContext);
    const {id} = useParams();

    const user = users.filter((user) => user.id == id );

    return (
        <div className="read-container">
            <Container>
              <Row>
                 <Col>
                 <h2 className="title"><Badge bg="info">Read Information</Badge></h2>
                    <div className="read-box">
                        <h3><strong>ID :  </strong>{user[0].id}</h3>
                        <h4><strong>Name : </strong> {user[0].name}</h4>
                        <h4><strong>Age : </strong> {user[0].age}</h4>
                        <h4><strong>Profession : </strong> {user[0].profession}</h4>
                        <Link to="/">
                            <Button className="goTo-home" variant="info">Go TO Home</Button>
                        </Link>
                    </div>
                 </Col>
              </Row>
            </Container>
        </div>
    );
};

export default Read;