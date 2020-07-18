// - створити функцію яка виводить масив

function arr(a) {
    console.log(a);
}

arr([20, 30, 50])

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

function array(a) {
    console.log(a)
}

array(Math.random(arr))

// - створити функцію яка приймає три числа та виводить та повертає найменьше.

function treeNumbMin(a, b, c) {
    console.log(Math.min(a, b, c))
}
treeNumbMin(3, 2, 1)


// - створити функцію яка приймає три числа та виводить та повертає найбільше.

function treeNumbMax(a, b, c) {
    let mat = Math.max(a, b, c)
    return mat
}
let maxNumber = treeNumbMax(4, 5, 6)
console.log(maxNumber)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше


function minMax(a, b, c, d) {
    let minNumb = Math.min(a, b, c, d)
    let maxNumb = Math.max(a, b, c, d)
    console.log(maxNumb)
    if (minNumb < maxNumb) {
        return minNumb
    }
}
let minimum = minMax(12, 14, 10, 3)
console.log(minimum)


// - створити функцію яка повертає найбільше число з масиву

function max() {
    // let maxNumInArr = Array.from(arguments)

    console.log(Math.max.apply(null, arguments))

    // for (let i = 0; i < arguments.length; i++) {
    //     console.log(arguments[i])

    //     for (let j of maxNumInArr[i])
    //         console.log(j)
    // }
}

max(21, 22, 2, 50)


// - створити функцію яка повертає найменьше число з масиву

function min() {
    console.log(Math.min.apply(null, arguments))
}
min(300, 2000, 150, 25994)

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

function sumEl() {

    let sum = 0

    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum)
    return sum
}
sumEl(12, 5, 18, 24)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function middleArif() {
    let arif = 0;

    for (let i = 0; i < arguments.length; i++) {
        arif += arguments[i];
    }
    let mid = arif / arguments.length
    console.log(mid)
    return mid
}
middleArif(50, 10, 15, 10, 90)

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

function objectArr(a) {
    console.log(a.length)
}
objectArr([{
    12: 56,
    14: 15
}, {
    12: 67
}, {
    67: 8
}, {
    43: 18
}])

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них


function keysObj(a) {

    for (let i of a) {

    }

}

keysObj([{
    12: 56,
    17: 26
}, {
    12: 67,
    22: 14
}, {
    67: 8,
    18: 17,
    21: 2
}])