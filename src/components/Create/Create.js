import React, { useContext, useState } from 'react';
import { userContext } from '../UserContext/UserContext';
import {Container,Row,Col,Button,Form,Badge } from 'react-bootstrap';
import "./Create.css";
import { Link } from 'react-router-dom';

const Create = () => {
    const[ users,setUsers] = useContext(userContext);
  
    const[id,setId] = useState('');
    const[name,setName] = useState('');
    const[age,setAge] = useState('');
    const[profession,setProfession] = useState('');

    const createId = (x) =>{
        setId(x.target.value)
    }
    const createName = (x) =>{
        setName(x.target.value)
    }
    const createAge = (x) =>{
        setAge(x.target.value)
    }
    const createProfession = (x) =>{
        setProfession(x.target.value)
    }


    const addUser = (user) =>{
       user.preventDefault();
       setUsers([...users,{id:id, name:name, age:age, profession:profession}])
    }
 
    return (
        <div>
           <Container>
            <Row>
             <Col>
             <h1 className="title"><Badge bg="success">Create Users</Badge></h1>
            
             <Form onSubmit={addUser}>
              <Form.Group className="mb-3">
                <Form.Label>ID No</Form.Label>
                <Form.Control 
                 type="text" 
                 placeholder="Enter Your Id" 
                 name="id" 
                 value={id}
                 onChange={createId}
                 />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                 type="text" 
                 placeholder="Enter Your Name" 
                 name="name" 
                 value={name}
                 onChange={createName}
                 />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control 
                 type="number" 
                 placeholder="Enter Your Age" 
                 name="age" 
                 value={age}
                 onChange={createAge}
                 />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Profession</Form.Label>
                <Form.Control 
                 type="text" 
                 placeholder="Enter Your Profession" 
                 name="id" 
                 value={profession}
                 onChange={createProfession}
                 />
              </Form.Group>

               
               <Button className="button" variant="success" type="submit">Submit</Button>
               <Link to="/">
               <Button className="button" variant="info" type="submit">Back To Home</Button>
               </Link>
             </Form>
             </Col>
            </Row>
          </Container>
        </div>
    );
};

export default Create;