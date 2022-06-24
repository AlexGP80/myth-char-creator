import React from "react";
import "../styles/characteristics.css";

export default function Characteristics(props) {

    const [remainingPoints, setRemainingPoints] = 
        React.useState(
            props.character.characteristicsPoints
            - props.character.strengthValue
            - props.character.constitutionValue
            - props.character.sizeValue
            - props.character.dexterityValue
            - props.character.intelligenceValue
            - props.character.powerValue
            - props.character.charismaValue
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
        props.handleCharacterChange({
            target: {
                name: characteristicValueName,
                value: newValue
            }
        });

        handleRemainingPointsChange(-variation);
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="characteristic">
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
                        value={props.character.strengthValue}
                        // onChange={props.handleCharacterChange}
                        readOnly 
                    />
                    <button 
                        className="inc-dec-button"
                        name="dec-strength"
                        onClick={() => incDecCharacteristic(
                            "strengthValue", 
                            "-", 
                            props.character.strengthValue,
                            props.character.strengthMin,
                            props.character.strengthMax
                        )}>-</button>
                    <button 
                        className="inc-dec-button"
                        name="inc-strength"
                        onClick={() => incDecCharacteristic(
                            "strengthValue", 
                            "+", 
                            props.character.strengthValue,
                            props.character.strengthMin,
                            props.character.strengthMax
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
                        value={props.character.constitutionValue}
                        // onChange={props.handleCharacterChange}
                        readOnly 
                    />
                    <button 
                        className="inc-dec-button"
                        name="dec-constitution"
                        onClick={() => incDecCharacteristic(
                            "constitutionValue", 
                            "-", 
                            props.character.constitutionValue,
                            props.character.constitutionMin,
                            props.character.constitutionMax
                        )}>-</button>
                    <button 
                        className="inc-dec-button"
                        name="inc-constitution"
                        onClick={() => incDecCharacteristic(
                            "constitutionValue", 
                            "+", 
                            props.character.constitutionValue,
                            props.character.constitutionMin,
                            props.character.constitutionMax
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
                        value={props.character.sizeValue}
                        // onChange={props.handleCharacterChange}
                        readOnly 
                    />
                    <button 
                        className="inc-dec-button"
                        name="dec-size"
                        onClick={() => incDecCharacteristic(
                            "sizeValue", 
                            "-", 
                            props.character.sizeValue,
                            props.character.sizeMin,
                            props.character.sizeMax
                        )}>-</button>
                    <button 
                        className="inc-dec-button"
                        name="inc-size"
                        onClick={() => incDecCharacteristic(
                            "sizeValue", 
                            "+", 
                            props.character.sizeValue,
                            props.character.sizeMin,
                            props.character.sizeMax
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
                        value={props.character.dexterityValue}
                        // onChange={props.handleCharacterChange}
                        readOnly 
                    />
                    <button 
                        className="inc-dec-button"
                        name="dec-dexterity"
                        onClick={() => incDecCharacteristic(
                            "dexterityValue", 
                            "-", 
                            props.character.dexterityValue,
                            props.character.dexterityMin,
                            props.character.dexterityMax
                        )}>-</button>
                    <button 
                        className="inc-dec-button"
                        name="inc-dexterity"
                        onClick={() => incDecCharacteristic(
                            "dexterityValue", 
                            "+", 
                            props.character.dexterityValue,
                            props.character.dexterityMin,
                            props.character.dexterityMax
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
                        value={props.character.intelligenceValue}
                        // onChange={props.handleCharacterChange}
                        readOnly 
                    />
                    <button 
                        className="inc-dec-button"
                        name="dec-intelligence"
                        onClick={() => incDecCharacteristic(
                            "intelligenceValue", 
                            "-", 
                            props.character.intelligenceValue,
                            props.character.intelligenceMin,
                            props.character.intelligenceMax
                        )}>-</button>
                    <button 
                        className="inc-dec-button"
                        name="inc-intelligence"
                        onClick={() => incDecCharacteristic(
                            "intelligenceValue", 
                            "+", 
                            props.character.intelligenceValue,
                            props.character.intelligenceMin,
                            props.character.intelligenceMax
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
                        value={props.character.powerValue}
                        // onChange={props.handleCharacterChange}
                        readOnly 
                    />
                    <button 
                        className="inc-dec-button"
                        name="dec-power"
                        onClick={() => incDecCharacteristic(
                            "powerValue", 
                            "-", 
                            props.character.powerValue,
                            props.character.powerMin,
                            props.character.powerMax
                        )}>-</button>
                    <button 
                        className="inc-dec-button"
                        name="inc-power"
                        onClick={() => incDecCharacteristic(
                            "powerValue", 
                            "+", 
                            props.character.powerValue,
                            props.character.powerMin,
                            props.character.powerMax
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
                        value={props.character.charismaValue}
                        // onChange={props.handleCharacterChange}
                        readOnly 
                    />
                    <button 
                        className="inc-dec-button"
                        name="dec-charisma"
                        onClick={() => incDecCharacteristic(
                            "charismaValue", 
                            "-", 
                            props.character.charismaValue,
                            props.character.charismaMin,
                            props.character.charismaMax
                        )}>-</button>
                    <button 
                        className="inc-dec-button"
                        name="inc-charisma"
                        onClick={() => incDecCharacteristic(
                            "charismaValue", 
                            "+", 
                            props.character.charismaValue,
                            props.character.charismaMin,
                            props.character.charismaMax
                        )}>+</button>
                </div>
            </form>
        </div>
    );
}