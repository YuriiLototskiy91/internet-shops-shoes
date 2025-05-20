import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

class TestRegistration(unittest.TestCase):
    def setUp(self):
        # Налаштовуємо драйвер для Chrome
        self.driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
        self.driver.get("http://127.0.0.1:5506/main/index.html")  
        
    def test_registration(self):
        driver = self.driver
        
        input_person = driver.find_element(By.CSS_SELECTOR, ".is-person")
        input_name = driver.find_element(By.CSS_SELECTOR, ".is-name")
        input_last_name = driver.find_element(By.CSS_SELECTOR, ".is-lastname")
        input_email = driver.find_element(By.CSS_SELECTOR, ".is-email")
        main_btn = driver.find_element(By.CSS_SELECTOR, ".button")
        
        input_person.send_keys("студент")
        input_name.send_keys("Андрій")
        input_last_name.send_keys("Цап")
        input_email.send_keys("student@gmail.com")  
        
        # Ось тут зупиняємо тест для того, щоб ви могли вручну натискати кнопку
        input("Натисніть Enter після введення даних і натискання кнопки 'Продовжити'...")

        # Перевіряємо, чи в локальному сховищі є запис з даними
        students_data = driver.execute_script("return localStorage.getItem('students');")
        
        # Перевірка, чи є дані студента в локальному сховищі
        if '"Андрій"' in students_data and '"Цап"' in students_data and '"student@gmail.com"' in students_data:
            print("Тест пройшов успішно: дані студента збережено в локальному сховищі.")
        else:
            print("Тест не пройшов: дані студента не збережено.")

    def tearDown(self):
        # Закриваємо браузер після тесту
        self.driver.quit()

if __name__ == "__main__":
    unittest.main()
