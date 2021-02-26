import React from 'react';
import "./UserOutput.css";

function UserOutput (props) {
        const style = {
            backgroundColor: "#f2e3f1",
            textTransform: "uppercase"
        };

        return (
        <div className = "UserOutput">
            <p>Welcome <span style = {style} > {props.userName} </span>,</p>
            <p>You’re going to be a valuable asset to our company</p>
        </div>);
    
}

export default UserOutput;