import React from "react";
import Characteristics from "./components/Characteristics";

export default function App() {
    const characteristicParameters = {
        characteristicsPoints: 75,
        strengthMin: 3,
        strengthMax: 18,
        constitutionMin: 3,
        constitutionMax: 18,
        sizeMin: 8,
        sizeMax: 18,
        dexterityMin: 3,
        dexterityMax: 18,
        intelligenceMin: 8,
        intelligenceMax: 18,
        powerMin: 3,
        powerMax: 18,
        charismaMin: 3,
        charismaMax: 18,
    }
    
    const [characteristicValues, setCharacteristicValues] = React.useState({
        // TODO: Change to array to extract individual characteristics as a component (characteristics.js is too long)
        strengthValue: 9,
        constitutionValue: 9,
        sizeValue: 12,
        dexterityValue: 9,
        intelligenceValue: 12,
        powerValue: 9,
        charismaValue: 9,
    });

    const [attributes, setAttributes] = React.useState({
        actionPoints: 2,        
        damageModifier: "+0",
        experienceModifier: 0,
        healingRate: 2,
        height: 173,
        weight: 68,
        hitPointsLegs: 5,
        hitPointsAbdomen: 6,
        hitPointsChest: 7,
        hitPointsArms: 4,
        hitPointsHead: 5,
        initiative: 11, 
        luckPoints: 2,
        magicPoints: 9,
        movementRate: 6
    })

    function handleCharacteristicsChange(event) {
        console.log(event);
        setCharacteristicValues(prevCharacter => (
            {
                ...prevCharacter,
                [event.target.name]: event.target.value
                // strengthValue: 10
            }
        ));
        console.log("handleCharacterChange");
    }

    console.log(characteristicValues);

    return (
        <>
            <Characteristics 
                characteristics={characteristicValues}
                characteristicParameters={characteristicParameters}
                handleCharacteristicsChange={handleCharacteristicsChange}
            />
        </>
    );
}