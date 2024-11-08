function the_truth() { //Функция для проверки истинности высказывания: «Число A является четным и двузначным»
    let a = parseInt(document.getElementById('a').value);//Ввод числа А
    if (Number.isNaN(a) === true){ // Проверка на неопределенное значение
        document.getElementById("result").innerText="Введите корректное значение";
    } else if (a % 2 === 0 && a.toString().length == 2){ // Проверка условия задачи (Делимость без остатка и длинна числа)
        document.getElementById("result").innerText='TRUE'; //Вывод при положительном результате
    } else{
        document.getElementById("result").innerText='FALSE'; //Вывод при отрицательном результате
    }
}

function changing_the_number() { // Функция для преобразования числа
    let a = parseInt(document.getElementById('number').value); // Получение введенного значения
    if (Number.isNaN(a) === true){ // Проверка на неопределенное значение
        document.getElementById("result1").innerText="Введите корректное значение";
    } else if (a > 0){
        a += 1;
        document.getElementById("result1").innerText=a;
    } else if (a < 0) {
        a -= 2;
        document.getElementById("result1").innerText=a;
    } else{
        a = 10;
        document.getElementById("result1").innerText=a;
    }
}

function y() { // Функция для нахождения f(x)
    let x = parseFloat(document.getElementById('a3').value); // Получение введенного значения
    let a = 2.73; // Объявление переменной А
    let b = 1.68; // Объявление переменной В
    let y;
    if (Number.isNaN(x) === true){ // Проверка на неопределенное значение
        document.getElementById("result2").innerText="Введите корректное значение";
    } else if (x <= 1){
        y = Math.sin(Math.log(Math.abs(x)));
        document.getElementById("result2").innerText='Значение функции = ' + y;
    } else if (x > 1 && x <= 3){
        y = Math.pow((4 * x) + b, 2)
        document.getElementById("result2").innerText='Значение функции = ' + y;
    } else{
        y = 1 / ((Math.pow(x, 2) + Math.pow(a, 2)));
        document.getElementById("result2").innerText='Значение функции = ' + y;
    }
}

function y_v_2() {
    let x = parseInt(document.getElementById('a4').value) // Получение введенного значения
    let a = 2.73; // Объявление переменной А
    let b = 1.68; // Объявление переменной В
    let y;
    switch (x) {
        case -2:
            y = Math.sin(Math.log(Math.abs(x)));
            document.getElementById("result3").innerText='Значение функции = ' + y;
            break;
        case 3:
            y = Math.pow((4 * x) + b, 2);
            document.getElementById("result3").innerText='Значение функции = ' + y;
            break;
        case 5:
            y = 1 / ((Math.pow(x, 2) + Math.pow(a, 2)))
            document.getElementById("result3").innerText='Значение функции = ' + y;
            break;
        default:
            document.getElementById("result3").innerText='Введите корректное значение';
            break;
    }
}