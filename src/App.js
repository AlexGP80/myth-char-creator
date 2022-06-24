import React from "react";
import Characteristics from "./components/Characteristics";
import characteristicsData from "./data/characteristicsData";

export default function App() {

    const characteristicsPoints = 75;

    const [characteristics, setCharacteristics] = React.useState(characteristicsData);

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
        setCharacteristics(prevCharacteristics => {
            return prevCharacteristics.map(characteristic => {
                if (characteristic.name === event.target.name) {
                    return {...characteristic, value: event.target.value}
                } else {
                    return characteristic;
                }
            })
        });
        console.log("handleCharacterChange");
    }

    console.log(characteristics);

    return (
        <>
            <Characteristics 
                characteristics={characteristics}
                characteristicsPoints={characteristicsPoints}
                handleCharacteristicsChange={handleCharacteristicsChange}
            />
        </>
    );
}