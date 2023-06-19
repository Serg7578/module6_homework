// Задание 1
function getEvenOdd (){
let arr = [1, 0, 8, 9, 10, 'sd', null, 28]
let even = 0
let nul = 0
let odd = 0
for (let i = 0; i < arr.length; i = i + 1) {
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
        if (arr[i] !== 0) {
            if (arr[i] % 2 == 0) even += 1
            else odd += 1
        }
        else nul += 1
    }
}
 console.log('чётных чисел в массиве - ' + even + ' , ноль встречается - ' + nul + ' раз(а)' + ', нечётных чисел - ' + odd)
}
getEvenOdd()