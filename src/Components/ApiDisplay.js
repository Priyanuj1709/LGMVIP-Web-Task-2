import React from "react";

const ApiDisplay = (props) => {
    return (
        <div className="Card">
        <div className="Card-desc">
            <img src={props.avatar} alt="random" />
            <div className="details">
            <h2 className="tags">ID - {props.user.id}</h2>
            <h4 className="tags" >NAME - {props.firstName} {props.lastName}</h4>
            <h3 className="tags">EMAIL - {props.email}</h3>
            </div>
        </div>
        </div>
    );
};

export default ApiDisplay;