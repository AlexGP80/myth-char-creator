import React from "react";

export default function Characteristic(props) {

    return (
        <div className="characteristic">
            <label 
                htmlFor={props.name}
                className="characteristicLabel"
            >{props.name}</label>
            <input 
                className="characteristicValue"
                type="text" 
                name={props.name}
                value={props.value}
                readOnly 
            />
            {props.generationType.startsWith("points") &&
            <button 
                className="inc-dec-button"
                name={`dec-${props.name}`}
                onClick={() => props.incDecCharacteristic(
                    props.name, 
                    "-", 
                    props.value,
                    props.min,
                    props.max
                )}>-</button>}
            {props.generationType.startsWith("points") &&
            <button 
                className="inc-dec-button"
                name={`inc-${props.name}`}
                onClick={() => props.incDecCharacteristic(
                    props.name, 
                    "+", 
                    props.value,
                    props.min,
                    props.max
                )}>+</button>}
        </div>
    );
}