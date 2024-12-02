function checkSpeed(speed) {
    if (typeof speed !== "number" || speed < 0) {
        return "Invalid input. Speed must be a positive number"

    }

    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit) {
        return "Ok";
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

        if (demeritPoints > 12) {
            return "License suspended";
        }else {
            return `Points: ${demeritPoints}`;
        }
    }
}