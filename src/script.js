let amongus = [1, 2, 4, 3, 8, 1, 1, 3, 8, 9, 3, 4, 5, 1, 9]
const newObject = { firstNumber: 1, secondNumber: 2, thirdNumber: 3 }
const getStringFromArray = (array) => {
    devider = array.toString();
    console.log(devider);
}
const getSortedConcatedArray = (array) => {
    soertedArray = array.sort((a, b) => a - b);
    console.log(soertedArray);
}
const getFlattenArray = (array) => {
    array = array.flat();
    console.log(array);
    return array;
}
const getUniqueElements = (array) => {
    return array.reduce(
        (acumulator, currentValue, _, startArray) =>
            startArray.filter((element) =>
                element === currentValue).length > 1 ? acumulator : [...acumulator, currentValue],
        []
    )
}
const getObjectsOfPowers = (object, exponent) => {
    return Object.entries(object).reduce((acumulator, currentValue) => ({
        ...acumulator, [currentValue[0]]: Math.pow(currentValue[1], exponent)
    }), {})
}
const getIndexOfSmallestNumer = (array) => {
    return indexOfSmallestNumer = Math.min(...array);
}
console.log(getIndexOfSmallestNumer(amongus));