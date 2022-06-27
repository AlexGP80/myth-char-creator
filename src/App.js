import React from "react";
import Attributes from "./components/Attributes";
import Characteristics from "./components/Characteristics";
import characteristicsData from "./data/characteristicsData";
import attributesData from "./data/attributesData";
import * as attributesLogic from "./logic/attributesLogic";
import "./styles/app.css";

export default function App() {

    const characteristicsPoints = 75;

    const [characteristics, setCharacteristics] = React.useState(characteristicsData);

    const [attributes, setAttributes] = React.useState(attributesData);

    const [frame, setFrame] = React.useState("Medium");

    const [useHouseRuledWeight, setUseHouseRuledWeight] = React.useState(false);

    function toggleUseHouseRuledWeightChange() {
        setUseHouseRuledWeight(prevWeightUsage => !prevWeightUsage);
    }

    React.useEffect(() => {
        useHouseRuledWeight? setFrame("") : setFrame("Medium");
    }
    , [useHouseRuledWeight]);
 
    function handleCharacteristicsChange(event) {
        setCharacteristics(prevCharacteristics => {
            return prevCharacteristics.map(characteristic => {
                if (characteristic.name === event.target.name) {
                    return {...characteristic, value: event.target.value}
                } else {
                    return characteristic;
                }
            })
        });
        // recalculateAttributes();
    }

    React.useEffect(() => {
        const [str, con, siz, dex, int, pow, cha] 
            = characteristics.map(chr => chr.value);
        
        let newAttributesData = [...attributesData];

        newAttributesData[0].value = attributesLogic.getActionPoints(int, dex);
        newAttributesData[1].value = attributesLogic.getDamageModifier(str, siz);
        newAttributesData[2].value = attributesLogic.getExperienceModifier(cha);
        newAttributesData[3].value = attributesLogic.getHealingRate(con);
        newAttributesData[4].value = attributesLogic.getHeight(siz);
        newAttributesData[6].value = attributesLogic.getLegsHitPoints(con, siz);
        newAttributesData[7].value = attributesLogic.getAbdomenHitPoints(con, siz);
        newAttributesData[8].value = attributesLogic.getChestHitPoints(con, siz);
        newAttributesData[9].value = attributesLogic.getArmsHitPoints(con, siz);
        newAttributesData[10].value = attributesLogic.getHeadHitPoints(con, siz);
        newAttributesData[11].value = attributesLogic.getInitiativeBonus(dex, int);
        newAttributesData[12].value = attributesLogic.getLuckPoints(pow);
        newAttributesData[13].value = attributesLogic.getMagicPoints(pow);
        newAttributesData[14].value = attributesLogic.getMovementRate();

        setAttributes(newAttributesData);
    }, [characteristics]);

    React.useEffect(() => {
        const [str, con, siz] 
            = characteristics.map(chr => chr.value);
        let newAttributesData = [...attributesData];
        newAttributesData[5].value = attributesLogic.getWeight(siz, str, con, frame);
        setAttributes(newAttributesData);
    }, [frame, characteristics]);

    return (
        <div className="app-container">
            <Characteristics 
                characteristics={characteristics}
                characteristicsPoints={characteristicsPoints}
                handleCharacteristicsChange={handleCharacteristicsChange}
            />
            <Attributes 
                attributes={attributes}
                frame={frame}
                setFrame={setFrame}
                useHouseRuledWeight={useHouseRuledWeight}
                toggleUseHouseRuledWeightChange={toggleUseHouseRuledWeightChange}
            />
        </div>
    );
}