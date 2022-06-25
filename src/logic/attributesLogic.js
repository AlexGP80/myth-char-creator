const weight = [
    ["40-43", "44-46", "47-49", "50-52", "53-55", "56-58", "59-62"],
    ["44-47", "48-51", "52-55", "56-58", "59-62", "63-66", "67-69"],
    ["48-51", "52-55", "56-59", "60-63", "64-67", "68-71", "72-75"],
    ["53-57", "58-61", "62-65", "66-69", "70-73", "74-77", "78-82"],
    ["57-60", "61-65", "66-70", "71-75", "76-80", "81-85", "86-90"],
    ["63-67", "68-72", "73-77", "78-82", "83-87", "88-92", "93-98"],
    ["69-72", "73-78", "79-84", "85-90", "91-96", "97-102", "103-107"],
    ["74-79", "80-85", "86-91", "92-98", "99-104", "105-110", "111-116"],
    ["80-85", "86-91", "92-98", "99-106", "107-113", "114-119", "120-125"],
    ["86-92", "93-99", "100-106", "107-114", "115-121", "122-128", "129-135"],
    ["93-99", "100-107", "108-115", "116-123", "124-131", "132-139", "140-146"]
];

function getSizeIndex(size) {
    return size - 8;
}

function getStrConIndex(strength, constitution) {
    return Math.floor((strength + constitution - 1) / 5) - 1;
}

export function getWeight(size, strength, constitution) {
    const sizeIndex = getSizeIndex(size);
    const strConIndex = getStrConIndex(strength, constitution);

    return weight[sizeIndex][strConIndex];
}

export function getHeight(size) {
    switch (size) {
        case 1 : {return "1-45";}
        case 2 : {return "46-80";}
        case 3 : {return "81-105";}
        case 4 : {return "106-120";}
        case 5 : {return "121-130";}
        case 6 : {return "131-140";}
        case 7 : {return "141-150";}
        case 8 : {return "151-155";}
        case 9 : {return "156-160";}
        case 10 : {return "161-165";}
        case 11 : {return "166-170";}
        case 12 : {return "171-175";}
        case 13 : {return "176-180";}
        case 14 : {return "181-185";}
        case 15 : {return "186-190";}
        case 16 : {return "191-195";}
        case 17 : {return "196-200";}
        case 18 : {return "201-205";}
        case 19 : {return "206-210";}
        case 20 : {return "211-215";}
        case 21 : {return "216-220";}
        default : {return "Error";}
    }
}

export function getActionPoints(intelligence, dexterity) {
    return Math.floor((intelligence+dexterity-1)/12) + 1;
}

export function getDamageModifier(strength, size) {
    const sumStrengthSize = strength + size;

    if (sumStrengthSize > 150) {
        return "+3d10";
    }
    if (sumStrengthSize > 140) {
        return "+2d10+1d8";
    }
    if (sumStrengthSize > 130) {
        return "+2d10+1d6";
    }
    if (sumStrengthSize > 120) {
        return "+2d10+1d4";
    }
    if (sumStrengthSize > 110) {
        return "+2d10+1d2";
    }
    if (sumStrengthSize > 100) {
        return "+2d10";
    }
    if (sumStrengthSize > 90) {
        return "+1d10+1d8";
    }
    if (sumStrengthSize > 80) {
        return "+2d8";
    }
    if (sumStrengthSize > 70) {
        return "+1d8+1d6";
    }
    if (sumStrengthSize > 60) {
        return "+2d6";
    }
    if (sumStrengthSize > 50) {
        return "+1d12";
    }
    if (sumStrengthSize > 45) {
        return "+1d10";
    }
    if (sumStrengthSize > 40) {
        return "+1d8";
    }
    if (sumStrengthSize > 35) {
        return "+1d6";
    }
    if (sumStrengthSize > 30) {
        return "+1d4";
    }
    if (sumStrengthSize > 25) {
        return "+1d2";
    }
    if (sumStrengthSize > 20) {
        return "+0";
    }
    if (sumStrengthSize > 15) {
        return "-1d2";
    }
    if (sumStrengthSize > 10) {
        return "-1d4";
    }
    if (sumStrengthSize > 5) {
        return "-1d6";
    }
    return "-1d8";
}

export function getExperienceModifier(charisma) {
    return Math.floor((charisma - 1) / 6) - 1;
}

export function getHealingRate(constitution) {
    return Math.floor((constitution - 1) / 6) + 1;
}

export function getLegsHitPoints(constitution, size) {
    return Math.floor((constitution + size) / 5);
}

export function getAbdomenHitPoints(constitution, size) {
    return getLegsHitPoints(constitution, size) + 1;
}

export function getChestHitPoints(constitution, size) {
    return getLegsHitPoints(constitution, size) + 2;
}

export function getArmsHitPoints(constitution, size) {
    let hitPoints = getLegsHitPoints(constitution, size) - 1;
    if (hitPoints === 0) {
        hitPoints = 1;
    }
    return hitPoints;
}

export function getHeadHitPoints(constitution, size) {
    return getLegsHitPoints(constitution, size);
}

export function getInitiativeBonus(dexterity, intelligence) {
    return Math.ceil((dexterity + intelligence) / 2);
}

export function getLuckPoints(power) {
    return Math.floor((power - 1) / 6) + 1;
}

export function getMagicPoints(power) {
    return power;
}

export function getMovementRate() {
    return 6;
}