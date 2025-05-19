// Отримуємо дані продавця з localStorage
const sellerData = JSON.parse(localStorage.getItem('currentSeller'));

if (sellerData) {
    const userNameElement = document.querySelector('#user-name');
    const userEmailElement = document.querySelector('#user-email');
    userNameElement.textContent = sellerData.name || 'Невідоме ім’я';
    userEmailElement.textContent = sellerData.email || 'Невідомий email';
} else {
    alert("Дані не знайдено. Будь ласка, увійдіть знову.");
}

// Отримуємо замовлення з localStorage
let orders = JSON.parse(localStorage.getItem('orders')) || [];

// Виводимо замовлення
const ordersList = document.getElementById('orders-list');

if (orders.length > 0) {
    orders.forEach(order => {
        const orderItem = document.createElement('li');
        orderItem.innerHTML = `
            <strong>Товар:</strong> ${order.productName}<br>
            <strong>Модель:</strong> ${order.model}<br>
            <strong>Опис:</strong> ${order.description}<br>
            <strong>Ціна:</strong> ${order.price} грн.<br>
            <strong>Дата замовлення:</strong> ${order.orderDate}<br>
            <img src="${order.image}" alt="${order.description}" style="width: 100px; height: auto;"><br><hr>
        `;
        ordersList.appendChild(orderItem);
    });
} else {
    const noOrdersMessage = document.createElement('p');
    noOrdersMessage.textContent = 'У вас немає замовлень.';
    ordersList.appendChild(noOrdersMessage);
}
