import React from "react";

export default function Attribute(props) {
    return (
        <div className="attribute">
            <label 
                htmlFor={props.name}
            >{props.name}</label>
            <input
                className="attributesValue"
                type="text" 
                name={props.name}
                value={props.value}
                readOnly 
            />
        </div>
    );
}