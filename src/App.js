import React from "react";
import Attributes from "./components/Attributes";
import Characteristics from "./components/Characteristics";
import characteristicsData from "./data/characteristicsData";
import attributesData from "./data/attributesData";
import * as attributesLogic from "./logic/attributesLogic";
import * as rollsLogic from "./logic/rollsLogic";
import "./styles/app.css";

export default function App() {
  const [characteristics, setCharacteristics] =
    React.useState(characteristicsData);

  const [attributes, setAttributes] = React.useState(attributesData);

  const [frame, setFrame] = React.useState("Medium");

  const [useHouseRuledWeight, setUseHouseRuledWeight] = React.useState(false);

  const [characteristicRollsCount, setCharacteristicRollsCount] =
    React.useState(0);

  const [generationType, setGenerationType] = React.useState("points75");

  const [characteristicsPoints, setCharacteristicPoints] = React.useState(75);

  const [cultureType, setCultureType] = React.useState("Primitive");

  React.useEffect(() => {
    // Set characteristics points
    if (generationType === "points75") {
      setCharacteristicPoints(75);
    } else if (generationType === "points80") {
      setCharacteristicPoints(80);
    } else if (generationType === "manual") {
      setCharacteristicPoints(999);
    } else {
      setCharacteristicPoints(0);
    }
    // Reset characteristics
    setCharacteristics(characteristicsData);
  }, [generationType]);

  React.useEffect(() => {
    setRemainingPoints(
      characteristicsPoints -
        characteristics.reduce((accum, curr) => accum + curr.value, 0)
    );
  }, [characteristicsPoints, characteristics]);

  const [remainingPoints, setRemainingPoints] = React.useState(
    characteristicsPoints -
      characteristics.reduce((accum, curr) => accum + curr.value, 0)
  );

  function handleRemainingPointsChange(variation) {
    setRemainingPoints(
      (prevRemainingPoints) => prevRemainingPoints + variation
    );
  }

  function incDecCharacteristic(
    characteristicName,
    operation,
    prevValue,
    min,
    max
  ) {
    const variation = operation === "+" ? 1 : -1;
    const newValue = prevValue + variation;
    if (newValue > max || newValue < min) {
      return;
    }
    const newRemainingPoints = remainingPoints - variation;
    if (newRemainingPoints < 0) {
      return;
    }
    handleCharacteristicsChange({
      target: {
        name: characteristicName,
        value: newValue,
      },
    });

    handleRemainingPointsChange(-variation);
  }

  React.useEffect(() => {
    if (generationType === "stdRoll") {
      const chrsData = characteristicsData.map((chrs) => ({
        ...chrs,
        value: rollsLogic.roll(chrs.roll),
      }));
      setCharacteristics(chrsData);
      addCharacteristicsRoll();
    }
  }, [generationType]);

  function rollCharacteristics() {
    characteristics.forEach((characteristic) => {
      handleCharacteristicsChange({
        target: {
          name: characteristic.name,
          value: rollsLogic.roll(characteristic.roll),
        },
      });
    });
    addCharacteristicsRoll();
  }

  function handleGenTypeChange(event) {
    if (generationType === "stdRoll") {
      if (
        !window.confirm(
          "Changing the generation method would reset the Characteristics values to their defaults. Current values will be lost. Are you sure you want to proceed?"
        )
      ) {
        return;
      }
    }
    setGenerationType(event.target.value);
  }

  function toggleUseHouseRuledWeightChange() {
    setUseHouseRuledWeight((prevWeightUsage) => !prevWeightUsage);
  }

  React.useEffect(() => {
    useHouseRuledWeight ? setFrame("") : setFrame("Medium");
  }, [useHouseRuledWeight]);

  function handleCharacteristicsChange(event) {
    setCharacteristics((prevCharacteristics) => {
      return prevCharacteristics.map((characteristic) => {
        if (characteristic.name === event.target.name) {
          return { ...characteristic, value: event.target.value };
        } else {
          return characteristic;
        }
      });
    });
    // recalculateAttributes();
  }

  React.useEffect(() => {
    const [str, con, siz, dex, int, pow, cha] = characteristics.map(
      (chr) => chr.value
    );

    let newAttributesData = [...attributesData];

    //TODO: Refactor this smelly block of code :)
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
    const [str, con, siz] = characteristics.map((chr) => chr.value);
    let newAttributesData = [...attributesData];
    newAttributesData[5].value = attributesLogic.getWeight(
      siz,
      str,
      con,
      frame
    );
    setAttributes(newAttributesData);
  }, [frame, characteristics]);

  function addCharacteristicsRoll() {
    setCharacteristicRollsCount((prevCount) => prevCount + 1);
  }

  function handleCultureChange(event) {
    setCultureType(event.target.value);
  }

  return (
    <div className="app-container">
      <Characteristics
        characteristics={characteristics}
        characteristicsPoints={characteristicsPoints}
        handleCharacteristicsChange={handleCharacteristicsChange}
        characteristicRollsCount={characteristicRollsCount}
        addCharacteristicsRoll={addCharacteristicsRoll}
        incDecCharacteristic={incDecCharacteristic}
        generationType={generationType}
        handleGenTypeChange={handleGenTypeChange}
        remainingPoints={remainingPoints}
        rollCharacteristics={rollCharacteristics}
      />
      <Attributes
        attributes={attributes}
        frame={frame}
        setFrame={setFrame}
        useHouseRuledWeight={useHouseRuledWeight}
        toggleUseHouseRuledWeightChange={toggleUseHouseRuledWeightChange}
      />
      <div className="Culture">
        <h2>Culture</h2>
        <label htmlFor="cultureType">Culture&nbsp;</label>
        <select
          id="cultureType"
          name="cultureType"
          value={cultureType}
          onChange={handleCultureChange}
        >
          <option value="Primitive">Primitive</option>
          <option value="Nomad">Nomad</option>
          <option value="Barbarian">Barbarian</option>
          <option value="Civilised">Civilised</option>
        </select>
      </div>
    </div>
  );
}
