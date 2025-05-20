const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-gmail');
const inputPass = document.querySelector('#input-pass');

const mainBtn = document.querySelector('.button');

mainBtn.addEventListener('click', () => {
    const name = inputName.value.trim();
    const email = inputEmail.value.trim();
    const password = inputPass.value.trim();

    // Перевірка, чи всі поля заповнені
    if (!name || !email || !password) {
        alert("Будь ласка, заповніть всі поля!");
        return;
    }

    // Формування об'єкта з даними користувача
    const data = { name, email, password };

    // Спливаюче повідомлення з вибором ролі
    const confirmRedirect = confirm("Виберіть роль: Ок — покупець, Скасувати — продавець");

    if (confirmRedirect) {
        // Якщо користувач вибирає Ок (Продавець)
        localStorage.setItem('currentSeller', JSON.stringify(data));

        let sellers = JSON.parse(localStorage.getItem('sellers')) || [];
        sellers.push(data);
        localStorage.setItem('sellers', JSON.stringify(sellers));

        // Перенаправлення на сторінку продавця
        window.location.href = '../selller/index.html';  // Заміна open на location.href для правильного перенаправлення
    } else {
        // Якщо користувач вибирає Скасувати (Покупець)
        localStorage.setItem('currentBuyer', JSON.stringify(data));

        let buyers = JSON.parse(localStorage.getItem('buyers')) || [];
        buyers.push(data);
        localStorage.setItem('buyers', JSON.stringify(buyers));

        // Перенаправлення на сторінку покупця
        window.location.href = '../buyer/index.html';  // Заміна open на location.href для правильного перенаправлення
    }

    // Очищення полів після збереження
    inputName.value = '';
    inputEmail.value = '';
    inputPass.value = '';
});

// Автоматичне додавання '@gmail.com' до email
// inputEmail.addEventListener('focus', () => {
//     if (!inputEmail.value.includes('@')) {
//         inputEmail.value = inputEmail.value + '@gmail.com';  // Додання домену до email
//     }
// });
