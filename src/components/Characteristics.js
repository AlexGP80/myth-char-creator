import React from "react";
import Characteristic from "./Characteristic";
import "../styles/characteristics.css";

export default function Characteristics(props) {
  const characteristicsElements = props.characteristics.map(
    (characteristic) => (
      <Characteristic
        key={characteristic.name}
        name={characteristic.name}
        value={characteristic.value}
        min={characteristic.min}
        max={characteristic.max}
        incDecCharacteristic={props.incDecCharacteristic}
        generationType={props.generationType}
      />
    )
  );

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="characteristics-container">
      <h2>Characteristics</h2>
      <form className="form" onSubmit={handleSubmit}>
        <span
          className="info"
          title="Points: 75 -> distribute 75 points amongst the characteristics.
Points: 80 -> distribute 80 points amongst the characteristics.
Roll: Standard -> Roll 3d6 for STR, CON, DEX, POW & CHA, roll 2d6+6 for SIZ & INT.
Manual -> set the characteristics values manually."
        >
          {
            //FIXME: Unicode information icon does not render on mobile. Emoji shows just fine, but see below
            //FIXME: No "easy" tooltip for mobile phone :(
          }
          &#128712;
        </span>
        &nbsp;
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
        &nbsp;
        {props.generationType.startsWith("points") && (
          <div className="remaining">
            <label htmlFor="remainingPoints" className="remainingLabel">
              Remaining Points
            </label>
            <input
              type="text"
              name="remainingPoints"
              value={props.remainingPoints}
              className="remainingValue"
              readOnly
            />
          </div>
        )}
        {props.generationType === "stdRoll" && (
          <button onClick={props.rollCharacteristics}>Roll</button>
        )}
        {characteristicsElements}
      </form>
    </div>
  );
}
