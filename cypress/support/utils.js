export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getUniqueRandomInts(min, max) {
    let firstNumber = getRandomInt(min, max);
    let secondNumber;

    do {
        secondNumber = getRandomInt(min, max);
    } while (secondNumber == firstNumber);

    return [firstNumber, secondNumber];
}