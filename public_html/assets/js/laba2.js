function values() { //Функция для нахождения площади и периметра прямоугольника
    let a = parseFloat(document.getElementById('a').value);//parseFloat(prompt("Введите сторону а прямоугольника:")); //Ввод стороны а
    let b = parseFloat(document.getElementById('b').value);//parseFloat(prompt("Введите сторону b прямоугольника:")); //Ввод стороны b
    let square = a * b; //Применение формулы нахождение площади
    let perimeter = 2 * (a + b); //Применение формулы нахождение периметра
    //alert("Площадь прямоугольника = " + square + "\n" +"Периметр прямоугольника = " + perimeter); //Вывод площади и периметра
    document.getElementById("result").innerText="Площадь прямоугольника = " + square + " " +"Периметр прямоугольника = " + perimeter;
}

function kilobytes() {//Функция для вычисления килобайт в файле
    let quantity = parseInt(document.getElementById('byte').value);//parseInt(prompt("Введите количество байт в файле:")); //Ввод количества байт в файле
    quantity = Math.abs(quantity); //Применение функции для вычисления абсолютного числа
    let kilobyte = Math.floor(quantity / 1024); //Вычисление количества килобайт в файле с использованией функции для округляения аргумента до ближайшего меньшего целого числа
    //alert("Количество килобайт = " + kilobyte); //Вывод количества килобайт в файле
    document.getElementById("result1").innerText="Количество килобайт в файле = " + kilobyte;
}