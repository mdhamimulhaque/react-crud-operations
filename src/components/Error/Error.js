import React from 'react';


const Error = () => {
const errorStyle={
    color:"red",
    fontSize:150,
    textAlign:"center",
    lineHeight:"100px"
}
    return (
        <div>
            <h1 style={errorStyle}>404 Error</h1>
        </div>
    );
};

export default Error;