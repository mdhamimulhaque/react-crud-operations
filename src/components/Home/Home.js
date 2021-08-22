import React, { useContext } from 'react';
import { userContext } from '../UserContext/UserContext';
import {Container,Row,Col,Table,Button,Badge  } from 'react-bootstrap';
import "./Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
    const [users,setUsers] = useContext(userContext);
    // console.log(users)
    return (
        <div className="home-container">
          <Container>
              <Row>
                 <Col>
                 <h1 className="title"><Badge bg="info">CRUD Operations (React JS)</Badge></h1>
                <Link to="/create">
                <Button className="success-button" variant="success">Create User</Button>
                </Link>
                 <Table striped bordered hover size="sm">
                   <thead>
                     <tr>
                       <th>ID No</th>
                       <th>Name</th>
                       <th>Age</th>
                       <th>Profession</th>
                       <th>Action</th>
                     </tr>
                   </thead>
                   <tbody>
                       {
                           users.map(user=> <tr key={user.id}>
                               <td>{user.id}</td>
                               <td>{user.name}</td>
                               <td>{user.age}</td>
                               <td>{user.profession}</td>
                               <td>
                                  <Link to={`/read/${user.id}`}>
                                    <Button className="button" variant="info">Read</Button>
                                  </Link>
                                  <Link to={`/update/${user.id}`}>
                                  <Button className="button" variant="primary">Update</Button>
                                  </Link>
                                  <Link to={`/delete/${user.id}`}>
                                    <Button className="button" variant="danger">Delete</Button>
                                  </Link>
                               </td>
                           </tr>
                             )
                       }
                   </tbody>
                 </Table>
                 </Col>
              </Row>
          </Container>
        </div>
    );
};

export default Home;