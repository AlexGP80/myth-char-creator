import React from "react";
import Characteristic from "./Characteristic";
import "../styles/characteristics.css";

export default function Characteristics(props) {



    const characteristicsElements = 
            props.characteristics.map(
                characteristic => <Characteristic 
                                        key={characteristic.name}
                                        name={characteristic.name} 
                                        value={characteristic.value}
                                        min={characteristic.min}
                                        max={characteristic.max}
                                        incDecCharacteristic={props.incDecCharacteristic}
                                        generationType={props.generationType}
                                    />
            );

    function handleSubmit(event) {
        event.preventDefault();
    }
        
        
    return (
        <div className="characteristics-container">
            <h2>Characteristics</h2>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="generationType">Generation Type</label>
                <select 
                    id="generationType" 
                    name="generationType"
                    value={props.generationType}
                    onChange={props.handleGenTypeChange}
                >
                    <option value="points75">Points: 75</option>
                    <option value="points80">Points: 80</option>
                    <option value="stdRoll">Roll: Standard</option>
                    <option value="manual">Manual</option>
                </select>
                {props.generationType.startsWith("points") &&
                <div className="remaining">
                    <label 
                        htmlFor="remainingPoints"
                        className="remainingLabel"
                    >Remaining Points</label>
                    <input 
                        type="text"
                        name="remainingPoints"
                        value={props.remainingPoints}
                        className="remainingValue"
                        readOnly
                    />
                </div>}
                {props.generationType === "stdRoll" &&
                <button onClick={props.rollCharacteristics}>Roll</button>}
                {characteristicsElements}
            </form>
        </div>
    );
}