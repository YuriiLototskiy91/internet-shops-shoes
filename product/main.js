// Отримуємо всі кнопки "Замовити"
const orderButtons = document.querySelectorAll('.order-button');

orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productBrand = button.getAttribute('data-product'); // Nike
        const model = button.getAttribute('data-model'); // Наприклад: Air Force 1 (Чоловiчi)

        let productDescription = '';
        let productPrice = 0;
        let productImage = '';

        // Визначаємо опис, ціну та зображення за моделлю
        switch (model) {
            case 'Air Force 1 (Чоловiчi)':
                productDescription = 'Nike Air Force 1 \'07 (Чоловiчi)';
                productPrice = 700;
                productImage = 'Nike1.avif';
                break;

            case 'Air Force 1 (Жiночi)':
                productDescription = 'Nike Air Force 1 \'07 LX (Жiночi)';
                productPrice = 650;
                productImage = 'Nike4.avif';
                break;

            case 'Air Max Plus (Чоловiчi)':
                productDescription = 'Nike Air Max Plus (Чоловiчi)';
                productPrice = 1000;
                productImage = 'Nike7.avif';
                break;

            default:
                productDescription = 'Опис товару не знайдений';
                productPrice = 0;
                productImage = '';
        }

        // Формуємо об'єкт замовлення
        const orderData = {
            productName: productBrand,
            model: model,
            description: productDescription,
            price: productPrice,
            orderDate: new Date().toLocaleString(),
            image: productImage
        };

        // Зберігаємо замовлення
        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push(orderData);
        localStorage.setItem('orders', JSON.stringify(orders));

        alert(`Товар "${productBrand} - ${model}" успішно замовлений!`);
    });
});
