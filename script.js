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

    console.log(Math.max.apply(null, arguments))


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

    let counter = 0;
    for (i = 0; i < a.length; i++) {
        counter += (Object.keys(a[i]).length)

    }
    console.log(counter)
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


// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]


function newArray() {
    let lenCurrentArray = 0;
    for (i = 0; i < arguments.length; i++) {
        if (lenCurrentArray < arguments[i].length) {
            lenCurrentArray = arguments[i].length
        }

    }
    let resArr = []
    for (i = 0; i < lenCurrentArray; i++) {
        let sum = 0;
        for (j = 0; j < arguments.length; j++) {
            if (i < arguments[j].length) {
                sum += arguments[j][i]
            }
        }
        resArr.push(sum)
    }
    return resArr
}

console.log(newArray([1, 2, 3, 4], [2, 3, 4, 5, 6], [12, 6, 2], [1, 2, 3, 4, 5, 6, 7, 8]))




// Створити функцію яка :

// - Додає в боді блок з текстом "Hello owu"

function addBody(a) {
    let div = document.createElement('div');
    div.innerText = a;
    document.body.appendChild(div)

}
addBody("hello owu")


// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

function elemWithText(a, b) {
    let div = document.createElement(a)
    div.innerText = b;
    document.body.appendChild(div)
}
elemWithText("div", "Hello guys")


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці


function bigArrayCars(array, nameId) {
    let idUl = document.getElementById(nameId)

    for (let i = 0; i < array.length; i++) {
        let divCar = document.createElement('div')
        let textCar = "\n"
        for (let car in array[i]) {
            textCar = textCar + car + ": " + array[i][car] + "\n";
        }
        divCar.innerText = textCar
        idUl.appendChild(divCar)
    }
    // document.body.appendChild(idUl)

}


bigArrayCars([{
        "model": "Toyota",
        "year": 2014,
        "power": 210,
        "color": "silver",
        // "driver": {
        //     "name": "Kolya",
        //     "age": 32,
        //     "sex": "male",
        //     "experince": 5
        // }
    },
    {
        "model": "Mercedes",
        "year": 2012,
        "power": 210,
        "color": "red",
        // "driver": {  
        //     "name": "Oleksiy",
        //     "age": 26,
        //     "sex": "male",
        //     "experince": 8
        // }
    },
    {
        "model": "Jeep",
        "year": 2016,
        "power": 310,
        "color": "black",
        // "driver": {
        //     "name": "Olexandr",
        //     "age": 35,
        //     "sex": "male",
        //     "experince": 10
        // }
    },
    {
        "model": "Cadillac",
        "year": 2018,
        "power": 210,
        "color": "red",
        // "driver": {
        //     "name": "Maxim",
        //     "age": 24,
        //     "sex": "male",
        //     "experince": 3
        // }
    },
    {
        "model": "Lexus",
        "year": 2015,
        "power": 230,
        "color": "brown",
        // "driver": {
        //     "name": "Mariia",
        //     "age": 24,
        //     "sex": "female",
        //     "experince": 4
        // }
    }
], "cars")


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

function biggestArrayCars(array, nameId) {
    let idUl = document.getElementById(nameId)

    for (let i = 0; i < array.length; i++) {
        let divCar = document.createElement('div')
        let textCar = "\n"
        for (let car in array[i]) {
            let propCar = document.createElement('div')

            if (typeof array[i][car] === "object") {

                textCar = car + ": " + "\n"
                for (let carLine in array[i][car]) {

                    textCar = textCar + " - - " + carLine + ": " + array[i][car][carLine] + "\n";

                }
            } else {

                textCar = car + ": " + array[i][car] + "\n";
            }
            propCar.innerText = textCar
            divCar.appendChild(propCar)
        }
        idUl.appendChild(divCar)
    }
    // document.body.appendChild(idUl)

}


biggestArrayCars([{
        "model": "Toyota",
        "year": 2014,
        "power": 210,
        "color": "silver",
        "driver": {
            "name": "Kolya",
            "age": 32,
            "sex": "male",
            "experince": 5
        }
    },
    {
        "model": "Mercedes",
        "year": 2012,
        "power": 210,
        "color": "red",
        "driver": {
            "name": "Oleksiy",
            "age": 26,
            "sex": "male",
            "experince": 8
        }
    },
    {
        "model": "Jeep",
        "year": 2016,
        "power": 310,
        "color": "black",
        "driver": {
            "name": "Olexandr",
            "age": 35,
            "sex": "male",
            "experince": 10
        }
    },
    {
        "model": "Cadillac",
        "year": 2018,
        "power": 210,
        "color": "red",
        "driver": {
            "name": "Maxim",
            "age": 24,
            "sex": "male",
            "experince": 3
        }
    },
    {
        "model": "Lexus",
        "year": 2015,
        "power": 230,
        "color": "brown",
        "driver": {
            "name": "Mariia",
            "age": 24,
            "sex": "female",
            "experince": 4
        }
    }
], "carsId")