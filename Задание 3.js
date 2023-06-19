// Задание 3
function sum(num1){
    return function (num2){
        return console.log(num1+num2)
    }
}
sum(12)(12) 
