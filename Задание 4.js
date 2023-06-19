//Задание 4
function sum (a,b){
     for (let i = a; a <= b; i = i + 1) {
        console.log(a)
        a = a + 1
        if (a == b) clearInterval(intervalId)
}
}
const intervalId = setInterval(sum, 1000, 5, 15)
