import React from "react";
import Characteristic from "./Characteristic";
import "../styles/characteristics.css";

export default function Characteristics(props) {

    const [remainingPoints, setRemainingPoints] = 
        React.useState(
            props.characteristicsPoints
            - props.characteristics.reduce((accum, curr) => accum + curr.value, 0)
        );

    function handleRemainingPointsChange(variation) {
        setRemainingPoints(prevRemainingPoints => prevRemainingPoints + variation);
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    function incDecCharacteristic(characteristicName, operation, prevValue, min, max) {
        const variation = operation === "+" ? 1 : -1;
        const newValue = prevValue + variation;
        if (newValue > max || newValue < min) {
            return;
        }
        const newRemainingPoints = remainingPoints - variation;
        if (newRemainingPoints < 0) {
            return;
        }
        props.handleCharacteristicsChange({
            target: {
                name: characteristicName,
                value: newValue
            }
        });

        handleRemainingPointsChange(-variation);
    }

    const characteristicsElements = 
            props.characteristics.map(
                characteristic => <Characteristic 
                                        key={characteristic.name}
                                        name={characteristic.name} 
                                        value={characteristic.value}
                                        min={characteristic.min}
                                        max={characteristic.max}
                                        incDecCharacteristic={incDecCharacteristic}
                                    />
            );


    return (
        <div className="characteristics-container">
            <h2>Characteristics</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div className="remaining">
                    <label 
                        htmlFor="remainingPoints"
                        className="remainingLabel"
                    >Remaining Points</label>
                    <input 
                        type="text"
                        name="remainingPoints"
                        value={remainingPoints}
                        className="remainingValue"
                        readOnly
                    />
                </div>
                {characteristicsElements}
            </form>
        </div>
    );
}