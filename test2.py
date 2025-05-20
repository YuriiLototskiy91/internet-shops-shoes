import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.alert import Alert  # Для роботи з alert

# Налаштування для запуску браузера в режимі без графічного інтерфейсу
options = Options()
options.headless = True  # Режим без графічного інтерфейсу

# Ініціалізація сервісу для драйвера
service = Service(ChromeDriverManager().install())

# Ініціалізація драйвера з передачею сервісу та опцій
driver = webdriver.Chrome(service=service, options=options)

# Початок вимірювання часу завантаження сторінки
start_time = time.time()

# Відкриття веб-сторінки
driver.get("http://127.0.0.1:5506/main/index.html")

# Затримка для завантаження сторінки
time.sleep(2)

# Вимірюємо час, який зайняло завантаження сторінки
page_load_time = time.time() - start_time
print(f"Час завантаження сторінки: {page_load_time} секунд")

# Початок вимірювання часу для виконання конкретної дії на сторінці
start_time_action = time.time()

# Перевірка, чи є попередження (alert), і закриття його
try:
    alert = WebDriverWait(driver, 3).until(EC.alert_is_present())  # Чекаємо на alert
    alert.accept()  # Приймаємо або закриваємо alert
    print("Попередження закрито.")
except:
    print("Попередження не з'явилося.")

# Очікуємо, поки кнопка не стане доступною для натискання
button = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.CSS_SELECTOR, '.button'))
)

# Натискання кнопки
button.click()

# Вимірюємо час виконання цієї дії
action_time = time.time() - start_time_action
print(f"Час виконання дії: {action_time} секунд")

# Закриття браузера після завершення роботи
driver.quit()
