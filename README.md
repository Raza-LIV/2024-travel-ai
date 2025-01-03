# 2024-Travel-ai

**Ласкаво просимо до Travel-ai!**

**Travel-ai** — це сервіс для генерації подорожей за вподобаннями користувачів, який використовує штучний інтелект OpenAI для створення маршрутів.

---

## Основні можливості веб-сервісу:

- **Зручний інтерфейс**: Інтуїтивно зрозумілий інтерфейс для комфортного використання.
- **Адаптивний дизайн**: Коректне відображення на різних пристроях (комп'ютери, планшети, смартфони).
- **Ефективна робота з даними**: Забезпечення введення, зберігання, обробки та виведення даних.
- **Реєстрація та аутентифікація**: Можливість реєстрації та аутентифікації користувачів.
- **Легка навігація**: Зручний перехід між різними розділами та сторінками.
- **SPA (Single Page Application)**: Динамічна маршрутизація для одно-сторінкових додатків.
- **Швидкість**: Швидке завантаження сторінок та обробка запитів.
- **Оптимізація ресурсів**: Мінімізація затримок і оптимізація використання ресурсів.
- **Масштабованість**: Можливість збільшення продуктивності та обсягів обробки даних у разі зростання кількості користувачів.
- **Система безпеки**: Використання сучасних методів шифрування даних та безпечної аутентифікації.
- **Захист даних**: Захист конфіденційної інформації користувачів та відповідність вимогам GDPR.
- **Контроль доступу**: Контроль доступу до особистої інформації користувачів.
- **Оновлення та підтримка**: Легка можливість оновлення та підтримки системи.
- **Кросплатформенність**: Підтримка різних операційних систем та браузерів.
- **Сумісність з пристроями**: Підтримка настільних комп'ютерів, планшетів, смартфонів.
- **Юзабіліті для всіх категорій користувачів**: Високий рівень доступності для людей з обмеженими можливостями.
- **Багатомовність**: Можливість перекладу інтерфейсу на інші мови та адаптації до культурних особливостей.

---

## Технологічний стек:

- **Frontend**:

  - HTML
  - CSS
  - JavaScript
  - TypeScript
  - React

- **Backend**:
  - PostgreSQL
  - NestJS

Залежності можна переглянути у файлах [package.json (frontend)](https://github.com/Raza-LIV/2024-travel-ai/blob/main/packages/frontend/package.json) та [package.json (backend)](https://github.com/Raza-LIV/2024-travel-ai/blob/main/packages/backend/package.json).

---

## Архітектура:

Система реалізує архітектуру **MVC (Model-View-Controller)**. Це архітектурний шаблон, що розділяє програму на три основні компоненти: **Model**, **View** і **Controller**. Такий підхід допомагає чітко розділяти обов'язки і підвищує гнучкість і модульність коду.

---

## Реалізація Git Hooks:

Для забезпечення правильної структури повідомлень комітів в проекті використовується **commit-msg hook**. Повідомлення комітів повинно відповідати такому формату:

Якщо коміт не відповідає цьому формату, виводиться повідомлення про помилку в термінал.

Також, для реалізації **pre-commit hook**, використовується бібліотека `simple-git-hooks`, яка забезпечує лінтинг і форматування файлів перед комітом. Реалізацію можна переглянути в [package.json](https://github.com/Raza-LIV/2024-travel-ai/blob/main/package.json).

---

## Конфігурація ESLint і Prettier:

Проект використовує ESLint для перевірки якості коду та Prettier для форматування:

- **ESLint конфігурація**: [backend/.eslintrc.js](https://github.com/Raza-LIV/2024-travel-ai/blob/main/packages/backend/.eslintrc.js)
- **Prettier конфігурація**: [backend/.prettierrc](https://github.com/Raza-LIV/2024-travel-ai/blob/main/packages/backend/.prettierrc)
