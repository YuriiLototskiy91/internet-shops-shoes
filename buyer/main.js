// Отримуємо елементи, де будемо відображати дані користувача
const userNameElement = document.getElementById('user-name');
const userEmailElement = document.getElementById('user-email');

// Отримуємо дані з localStorage
const currentBuyer = JSON.parse(localStorage.getItem('currentBuyer'));

if (currentBuyer) {
    // Якщо дані покупця знайдені, відображаємо їх на сторінці
    userNameElement.textContent = currentBuyer.name || 'Невідоме ім\'я';
    userEmailElement.textContent = currentBuyer.email || 'Невідомий email';
} else {
    // Якщо дані не знайдено, виводимо повідомлення
    userNameElement.textContent = 'Дані не знайдено';
    userEmailElement.textContent = 'Дані не знайдено';
}
