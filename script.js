"use strict";

function calcCub(side) {
    if (typeof (side) != "number" || side < 0 || !Number.isInteger(side)) {
        return "При вычислении произошла ошибка";
    } else {
        let s = 6 * side * side;
        let v = side * side * side;
        return `Обьем куба: ${v}, площадь всей повехности: ${s}`;
    }
}
// console.log(calcCub(15));

function getCoupeNumber(answer) {
    if (answer < 0 || answer > 36) {
        return "Таких мест в вагоне не существует";
    } else {
        return Math.ceil(answer / 4); // Делим место на кол-во мест в каждом купе и округляем до большего. Номер купе равен место / 4 
    }
}
// console.log(getCoupeNumber(36));

function getMax(one, two, three, four) {
    return Math.max(one, two, three, four);
}
// console.log(getMax(22, 11, 3, 6))

function ap(one, two) {
    if (two <= 0 || typeof (two) == "string") {
        return one;
    } else {
        let result = one - one;
        let string = "";

        for (let i = 0; i < two; i++) {
            result += one + one;
            string += result + "---"
        }
        return string.substring(0, string.length - 3);
    }
}
// console.log(ap(5, 3));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const mainArray = baseCurrencies.concat(additionalCurrencies);

function availableCurr(arr, missingCurr) {
    if (arr.length <= 0) return "Нет доступных валют";

    let string = "Доступные валюты:\n";

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != missingCurr) {
            string += `${arr[i]}\n`;
        }
    }
    return string;
}
console.log(availableCurr(mainArray, "CNY"));
