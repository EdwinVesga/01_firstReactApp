import React from 'react';
import "./UserInput.css";

function UserInput(props) {

        const style = {
            width: "100%",
            border: "none"
        };

        return (
        <div className = "UserInput">
            <input style={style} onChange={props.onChange} value={props.userName} />
        </div>
        );
    
}

export default UserInput;