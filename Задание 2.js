//Задание 2
function getPrimeNumber(num) {
    if (num > 1000) { return console.log('Неверные данные') }
    else {
        if (num === 0 || num === 1) { return console.log('Не простое число') }
        else {
            for (let i = 2; i < num; i = i + 1) {
                if (num % i == 0) { return console.log('Не простое число') }
            }
        }
    }
    return console.log('Простое число')
}
getPrimeNumber(0)