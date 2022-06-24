import React from "react";
import "../styles/characteristics.css";

export default function Characteristics(props) {

    const [remainingPoints, setRemainingPoints] = 
        React.useState(
            props.characteristicParameters.characteristicsPoints
            - props.characteristics.strengthValue
            - props.characteristics.constitutionValue
            - props.characteristics.sizeValue
            - props.characteristics.dexterityValue
            - props.characteristics.intelligenceValue
            - props.characteristics.powerValue
            - props.characteristics.charismaValue
        );

    function handleRemainingPointsChange(variation) {
        setRemainingPoints(prevRemainingPoints => prevRemainingPoints + variation);
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    function incDecCharacteristic(characteristicValueName, operation, prevValue, min, max) {
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
                name: characteristicValueName,
                value: newValue
            }
        });

        handleRemainingPointsChange(-variation);
    }

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
                <div className="characteristic">
                    <label 
                        htmlFor="strengthValue"
                        className="characteristicLabel"
                    >Strength</label>
                    <input 
                        className="characteristicValue"
                        type="text" 
                        name="strengthValue"
                        value={props.characteristics.strengthValue}
                        // onChange={props.handleCharacterChange}
                        readOnly 
                    />
                    <button 
                        className="inc-dec-button"
                        name="dec-strength"
                        onClick={() => incDecCharacteristic(
                            "strengthValue", 
                            "-", 
                            props.characteristics.strengthValue,
                            props.characteristics.strengthMin,
                            props.characteristics.strengthMax
                        )}>-</button>
                    <button 
                        className="inc-dec-button"
                        name="inc-strength"
                        onClick={() => incDecCharacteristic(
                            "strengthValue", 
                            "+", 
                            props.characteristics.strengthValue,
                            props.characteristics.strengthMin,
                            props.characteristics.strengthMax
                        )}>+</button>
                </div>
                <div className="characteristic">
                    <label 
                        htmlFor="constitutionValue"
                        className="characteristicLabel"
                    >Constitution</label>
                    <input 
                        className="characteristicValue"
                        type="text" 
                        name="constitutionValue"
                        value={props.characteristics.constitutionValue}
                        // onChange={props.handleCharacterChange}
                        readOnly 
                    />
                    <button 
                        className="inc-dec-button"
                        name="dec-constitution"
                        onClick={() => incDecCharacteristic(
                            "constitutionValue", 
                            "-", 
                            props.characteristics.constitutionValue,
                            props.characteristics.constitutionMin,
                            props.characteristics.constitutionMax
                        )}>-</button>
                    <button 
                        className="inc-dec-button"
                        name="inc-constitution"
                        onClick={() => incDecCharacteristic(
                            "constitutionValue", 
                            "+", 
                            props.characteristics.constitutionValue,
                            props.characteristics.constitutionMin,
                            props.characteristics.constitutionMax
                        )}>+</button>
                </div>
                <div className="characteristic">
                    <label 
                        htmlFor="sizeValue"
                        className="characteristicLabel"
                    >Size</label>
                    <input 
                        className="characteristicValue"
                        type="text" 
                        name="sizeValue"
                        value={props.characteristics.sizeValue}
                        // onChange={props.handleCharacterChange}
                        readOnly 
                    />
                    <button 
                        className="inc-dec-button"
                        name="dec-size"
                        onClick={() => incDecCharacteristic(
                            "sizeValue", 
                            "-", 
                            props.characteristics.sizeValue,
                            props.characteristics.sizeMin,
                            props.characteristics.sizeMax
                        )}>-</button>
                    <button 
                        className="inc-dec-button"
                        name="inc-size"
                        onClick={() => incDecCharacteristic(
                            "sizeValue", 
                            "+", 
                            props.characteristics.sizeValue,
                            props.characteristics.sizeMin,
                            props.characteristics.sizeMax
                        )}>+</button>
                </div>
                <div className="characteristic">
                    <label 
                        htmlFor="dexterityValue"
                        className="characteristicLabel"
                    >Dexterity</label>
                    <input 
                        className="characteristicValue"
                        type="text" 
                        name="dexterityValue"
                        value={props.characteristics.dexterityValue}
                        // onChange={props.handleCharacterChange}
                        readOnly 
                    />
                    <button 
                        className="inc-dec-button"
                        name="dec-dexterity"
                        onClick={() => incDecCharacteristic(
                            "dexterityValue", 
                            "-", 
                            props.characteristics.dexterityValue,
                            props.characteristics.dexterityMin,
                            props.characteristics.dexterityMax
                        )}>-</button>
                    <button 
                        className="inc-dec-button"
                        name="inc-dexterity"
                        onClick={() => incDecCharacteristic(
                            "dexterityValue", 
                            "+", 
                            props.characteristics.dexterityValue,
                            props.characteristics.dexterityMin,
                            props.characteristics.dexterityMax
                        )}>+</button>
                </div>
                <div className="characteristic">
                    <label 
                        htmlFor="intelligenceValue"
                        className="characteristicLabel"
                    >Intelligence</label>
                    <input 
                        className="characteristicValue"
                        type="text" 
                        name="intelligenceValue"
                        value={props.characteristics.intelligenceValue}
                        // onChange={props.handleCharacterChange}
                        readOnly 
                    />
                    <button 
                        className="inc-dec-button"
                        name="dec-intelligence"
                        onClick={() => incDecCharacteristic(
                            "intelligenceValue", 
                            "-", 
                            props.characteristics.intelligenceValue,
                            props.characteristics.intelligenceMin,
                            props.characteristics.intelligenceMax
                        )}>-</button>
                    <button 
                        className="inc-dec-button"
                        name="inc-intelligence"
                        onClick={() => incDecCharacteristic(
                            "intelligenceValue", 
                            "+", 
                            props.characteristics.intelligenceValue,
                            props.characteristics.intelligenceMin,
                            props.characteristics.intelligenceMax
                        )}>+</button>
                </div>
                <div className="characteristic">
                    <label 
                        htmlFor="powerValue"
                        className="characteristicLabel"
                    >Power</label>
                    <input 
                        className="characteristicValue"
                        type="text" 
                        name="powerValue"
                        value={props.characteristics.powerValue}
                        // onChange={props.handleCharacterChange}
                        readOnly 
                    />
                    <button 
                        className="inc-dec-button"
                        name="dec-power"
                        onClick={() => incDecCharacteristic(
                            "powerValue", 
                            "-", 
                            props.characteristics.powerValue,
                            props.characteristics.powerMin,
                            props.characteristics.powerMax
                        )}>-</button>
                    <button 
                        className="inc-dec-button"
                        name="inc-power"
                        onClick={() => incDecCharacteristic(
                            "powerValue", 
                            "+", 
                            props.characteristics.powerValue,
                            props.characteristics.powerMin,
                            props.characteristics.powerMax
                        )}>+</button>
                </div>
                <div className="characteristic">
                    <label 
                        htmlFor="charismaValue"
                        className="characteristicLabel"
                    >Charisma</label>
                    <input 
                        className="characteristicValue"
                        type="text" 
                        name="charismaValue"
                        value={props.characteristics.charismaValue}
                        // onChange={props.handleCharacterChange}
                        readOnly 
                    />
                    <button 
                        className="inc-dec-button"
                        name="dec-charisma"
                        onClick={() => incDecCharacteristic(
                            "charismaValue", 
                            "-", 
                            props.characteristics.charismaValue,
                            props.characteristics.charismaMin,
                            props.characteristics.charismaMax
                        )}>-</button>
                    <button 
                        className="inc-dec-button"
                        name="inc-charisma"
                        onClick={() => incDecCharacteristic(
                            "charismaValue", 
                            "+", 
                            props.characteristics.charismaValue,
                            props.characteristics.charismaMin,
                            props.characteristics.charismaMax
                        )}>+</button>
                </div>
            </form>
        </div>
    );
}