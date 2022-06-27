import React from "react";
import Characteristic from "./Characteristic";
import "../styles/characteristics.css";
import * as rollsLogic from "../logic/rollsLogic";

export default function Characteristics(props) {

    console.log(rollsLogic.roll("3d6"));
    console.log(rollsLogic.roll("2d6+6"));

    const [generationType, setGenerationType] = React.useState("points75");

    const [characteristicsPoints, setCharacteristicPoints] = React.useState(75);

    React.useEffect(() => {
        if (generationType === "points75") {
            setCharacteristicPoints(75);
        } else if (generationType === "points80") {
            setCharacteristicPoints(80);
        } else {
            setCharacteristicPoints(0);
        }
        resetCharacteristics();
    }, [generationType]);

    React.useEffect(() => {
        setRemainingPoints(characteristicsPoints
            - props.characteristics.reduce((accum, curr) => accum + curr.value, 0));
    }, [characteristicsPoints, props.characteristics]);

    const [remainingPoints, setRemainingPoints] = 
        React.useState(
            characteristicsPoints
            - props.characteristics.reduce((accum, curr) => accum + curr.value, 0)
        );

    console.log(characteristicsPoints);
    console.log(remainingPoints);

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

    function resetCharacteristics() {
        props.characteristics.forEach(characteristic => {
            props.handleCharacteristicsChange({
                target: {
                    name: characteristic.name,
                    value: characteristic.default
                }
            });
        });
    }

    function rollCharacteristics() {
        props.characteristics.forEach(characteristic => {
            props.handleCharacteristicsChange({
                target: {
                    name: characteristic.name,
                    value: rollsLogic.roll(characteristic.roll)
                }
            });
        });
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
                                        generationType={generationType}
                                    />
            );


    function handleGenTypeChange(event) {
        // console.log(event);
        setGenerationType(event.target.value);
    }

    console.log(generationType);

    return (
        <div className="characteristics-container">
            <h2>Characteristics</h2>
            <form className="form" onSubmit={handleSubmit}>
                <select 
                    id="generationType" 
                    name="generationType"
                    value={generationType}
                    onChange={handleGenTypeChange}
                >
                    <option value="points75">Points: 75</option>
                    <option value="points80">Points: 80</option>
                    <option value="stdRoll">Roll: Standard</option>
                </select>
                {generationType.startsWith("points") &&
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
                </div>}
                {generationType === "stdRoll" &&
                <button onClick={rollCharacteristics}>Roll</button>}
                {characteristicsElements}
            </form>
        </div>
    );
}