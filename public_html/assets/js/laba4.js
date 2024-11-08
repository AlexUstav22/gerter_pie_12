function sum_and_product_of_evens(){// Функция для вывода суммы и произведения чисел
    let N = parseInt(document.getElementById('N').value); // Получение введенного значения
    let sum = 0;
    let product = 1;
    if (Number.isNaN(N) === true || N < 2){
        document.getElementById("result").innerText="Введите корректное значение";
    } else {
        for (let i = 1; i <= N; i++) {
            if (i % 2 === 0) { // Проверка на четность
                sum += i;
                product *= i;
            }
        }
        document.getElementById("result").innerText='Сумма четных чисел = ' + sum + ' | ' + 'Произведение четных чисел = ' + product;
    }
}

function print_squares_and_count(){ // Функция для вывода квадратов чисел в диапозоне между А и B и подсчет чисел между ними. (Включая А и В).
    let a = parseInt(document.getElementById('A').value); // Получение введенного значения и преобразование его в целое
    let b = parseInt(document.getElementById('B').value); // Получение введенного значения и преобразование его в целое
    let count = 0;
    let output = "";
    if (a < b){ // Проверка на условие, что а меньше b
        for (let i = b; i >= a; i--){
        let square = i * i;
        output += square + " ";
        count += 1;
        }
        document.getElementById("result1").innerText="Квадраты чисел: " + output + " " + "Количество чисел = " + count;
    } else if (a >= b) {
        document.getElementById("result1").innerText="A >= B";
    } else {
        document.getElementById("result1").innerText="Введите корректное значение";
    }
    
}