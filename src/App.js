import React from "react";
import Characteristics from "./components/Characteristics";

export default function App() {
    const [character, setCharacter] = React.useState({
        characteristicsPoints: 75,
        strengthMin: 3,
        strengthMax: 18,
        strengthValue: 9,
        constitutionMax: 18,
        constitutionValue: 9,
        constitutionMin: 3,
        sizeMin: 8,
        sizeMax: 18,
        sizeValue: 12,
        dexterityMin: 3,
        dexterityMax: 18,
        dexterityValue: 9,
        intelligenceMin: 8,
        intelligenceMax: 18,
        intelligenceValue: 12,
        powerMin: 3,
        powerMax: 18,
        powerValue: 9,
        charismaMin: 3,
        charismaMax: 18,
        charismaValue: 9,
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
    });

    function handleCharacterChange(event) {
        console.log(event);
        setCharacter(prevCharacter => (
            {
                ...prevCharacter,
                [event.target.name]: event.target.value
                // strengthValue: 10
            }
        ));
        console.log("handleCharacterChange");
    }

    console.log(character);

    return (
        <>
            <Characteristics 
                character={character}
                handleCharacterChange={handleCharacterChange}
            />
        </>
    );
}