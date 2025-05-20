from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# Ініціалізація драйвера
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

try:
    # Відкриваємо веб-сторінку
    driver.get("http://127.0.0.1:5506/main/index.html")  # Змініть на свою URL-адресу

    # Знаходимо текст "Вас вітає"
    try:
        # Пошук елемента за текстом
        element = driver.find_element(By.XPATH, "//*[contains(text(), 'Вас вітає')]")
        print("Тест успішно пройдено: текст 'Вас вітає' знайдено.")
    except Exception as e:
        print("Тест не пройшов: текст 'Вас вітає' не знайдено.")
        print(f"Помилка: {e}")

finally:
    # Закриваємо браузер
    driver.quit()
