import React from "react";
import "../styles/attributes.css";
import Attribute from "./Attribute";

export default function Attributes(props) {
  const attrElements = props.attributes.map((att) => (
    <Attribute key={att.name} name={att.name} value={att.value} />
  ));

  function handleHouseRuledWeightChange(event) {
    if (event.target.value !== props.useHouseRuledWeight) {
      props.toggleUseHouseRuledWeightChange();
    }
  }

  function handleFrameChange(event) {
    props.setFrame(event.target.value);
  }

  return (
    <div className="attributes-container">
      <h2>Attributes</h2>
      <span
        className="info"
        title="Homebrewed rule with no frames, weight is computed from SIZ, STR and CON values in accordance with Corpulence Index"
      >
        {
          //FIXME: Unicode information icon does not render on mobile. Emoji shows just fine, but see below
          //FIXME: No "easy" tooltip for mobile phone :(
        }
        &#128712;
      </span>
      &nbsp;
      <label htmlFor="useHouseRuledWeight">Use House Ruled Weight&nbsp;</label>
      <select
        id="useHouseRuledWeight"
        name="useHouseRuledWeight"
        value={props.useHouseRuledWeight}
        onChange={handleHouseRuledWeightChange}
      >
        <option value={false}>false</option>
        <option value={true}>true</option>
      </select>
      {props.useHouseRuledWeight === false && (
        <div>
          <label htmlFor="frame">Frame&nbsp;</label>
          <select
            id="frame"
            name="frame"
            value={props.frame}
            onChange={handleFrameChange}
          >
            <option value="Lithe">Lithe</option>
            <option value="Medium">Medium</option>
            <option value="Heavy">Heavy</option>
          </select>
        </div>
      )}
      {attrElements}
    </div>
  );
}
