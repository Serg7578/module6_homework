//Задание 4
function sum (a,b){
    const intervalId=setInterval(function () {
        console.log (a)
        if (a == b) clearInterval(intervalId)
        a=a+1
        },1000, a, b)
        }
        sum(a,b)
