let prod = document.getElementById('product'); // Получаем элемент с id 'product'
let products, products_search;
// Функция для добавления продуктов на страницу
function adding_a_product(products) {
    prod.innerHTML = ''; // Очищаем содержимое элемента prod
    for (let i = 0; i < products.length; i++) { // Инициализация цикла for
        let product = products[i]; // Получаем текущий продукт по индексу i
        let product_element = document.createElement('div'); // Создаем новый элемент div для продукта
        product_element.className = "product_info";
        product_element.innerHTML = `
            <p class="product_information">${product.title}</p>
            <p class="product_information">${product.description}</p>
            <p class="product_information">${product.price}</p>
            <img class="product_information product_picture" src="${product.thumbnail}" alt="${product.title}">`;
        prod.append(product_element); // Добавление продукта в prod
    };
}

fetch('https://dummyjson.com/products?limit=30&skip=60')
.then(res => res.json())
.then(json => { // Получаем объект json
    products = json.products; // Извлекаем массив продуктов из json
    adding_a_product(products); // Вызываем функцию для отображения продуктов
})


let search_button = document.getElementById('search_button'); // Получаем элемент с id 'search_button'
// Обработчик события для кнопки поиска
search_button.addEventListener('click', () => {// Событие при нажатии кнопки "Поиск"
    let searchInput = document.getElementById('search_input').value.toLowerCase(); // Получаем значение из поля ввода
    if (searchInput == ''){// Проверка на пустое значение
        adding_a_product(products);
        document.getElementById('total_items').innerHTML = "";
        document.getElementById('count_element').innerHTML = "";
    } else {
        fetch(`https://dummyjson.com/products/search?q=${searchInput}`) // Запрос к API
        .then(res => res.json())
        .then(json => {
            let total_items = json.total;
            products_search = json.products;
            let count_element = products_search.length;
            adding_a_product(products_search);
            document.getElementById('total_items').innerHTML = "Количество всех продуктов " + total_items ;
            document.getElementById('count_element').innerHTML = "Количество продуктов на странице " + count_element;
            
        })
    }
})  


