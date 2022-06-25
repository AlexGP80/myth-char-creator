import React from "react";
import "../styles/attributes.css";
import Attribute from "./Attribute";

export default function Attributes(props) {

    console.log(props);

    const attrElements = 
        props.attributes
             .map(att => <Attribute
                            key = {att.name}
                            name = {att.name}
                            value = {att.value} 
                         />);

    return (
        <div className="attributes-container">
            <h2>Attributes</h2>
            {attrElements}
        </div>
    );
}