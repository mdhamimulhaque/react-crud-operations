import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { userContext } from '../UserContext/UserContext';
import {Container,Row,Col,Button,Form,Badge } from 'react-bootstrap';

const Update = () => {

    const [users,setUsers] = useContext(userContext);
    const {id} = useParams();

    const user = users.filter((user) => user.id == id)

    const[name,setName] = useState(user[0].name);
    const[age,setAge] = useState(user[0].age);
    const[profession,setProfession] = useState(user[0].profession);

    const updateName = (x) =>{
        setName(x.target.value);
        const editName = name;
        user[0].name = editName;
    }
    const updateAge = (x) =>{
        setAge(x.target.value);
        const editAge = age;
        user[0].age = editAge;
    }
    const updateProfession = (x) =>{
        setProfession(x.target.value);
        const editProfession = profession;
        user[0].profession = editProfession;
    }

    const updateUserInfo = (userInfo) =>{
        userInfo.preventDefault();
        setUsers([...users])
    }


    return (
        <div>
        <Container>
            <Row>
             <Col>
             <h1 className="title"><Badge bg="primary">Edit Informations</Badge></h1>
             <h1 className="id-title"><Badge bg="info">ID No : {id}</Badge></h1>
             <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                 type="text" 
                 placeholder="Enter Your Name" 
                 name="name" 
                 value={name}
                 onChange={updateName}
                 />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control 
                 type="number" 
                 placeholder="Enter Your Age" 
                 name="age" 
                 value={age}
                 onChange={updateAge}
                 />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Profession</Form.Label>
                <Form.Control 
                 type="text" 
                 placeholder="Enter Your Profession" 
                 name="profession" 
                 value={profession}
                 onChange={updateProfession}
                 />
              </Form.Group>

               
               
               <Link to="/">
                  <Button onSubmit={()=>updateUserInfo} className="button" variant="primary" type="submit">Submit</Button>
                  <Button className="button" variant="info" type="submit">Back To Home</Button>
               </Link>
             </Form>
             </Col>
            </Row>
          </Container>
        </div>
    );
};

export default Update;