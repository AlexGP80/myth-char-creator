export function roll(rollStr) {
    let [pureRoll, scalarPos] = rollStr.split("+");
    let [rollTmp, scalarNeg] = pureRoll.split("-");
    let [numDice, diceFaces] = rollTmp.split("d");
    
    scalarPos = scalarPos? Number(scalarPos) : 0;
    scalarNeg = scalarNeg? Number(scalarNeg) : 0;
    if (!scalarNeg) scalarNeg = 0;
    numDice = Number(numDice);
    diceFaces = Number(diceFaces);

    let result = 0;
    for (let i=0; i<numDice; i++) {
        result += Math.floor(Math.random() * diceFaces) + 1;
    }

    return result + scalarPos - scalarNeg;
}