import React, { createContext, useState } from 'react';

export const userContext = createContext();
export const UserContext = (props) => {
    const [users,setUsers] = useState([
        {id:1, name:"Md Hamimul Haque", age:22, profession:"Web Designer & Developer"},
        {id:2, name:"Md Rafaetul Haque", age:19, profession:"Mobile App Developer"},
        {id:3, name:"Shariar Ragib", age:23, profession:"Graphic Designer"},
    ]);
    return (
        <div>
            <userContext.Provider value={[users,setUsers]}>
                {props.children}
            </userContext.Provider>
        </div>
    );
};

export default UserContext;